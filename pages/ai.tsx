import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"

import { getGlobalElements } from "lib/get-global-elements"
import { Breadcrumbs } from "components/breadcrumbs"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormContact } from "components/form--contact"

interface ContactPageProps extends LayoutProps {}

export default function ContactPage({ menus, blocks }: ContactPageProps) {
  const { t } = useTranslation()
  return (
    <Layout
      meta={{
        title: t("website-ai"),
      }}
      menus={menus}
      blocks={blocks}
    >
      <div className="container">
	<iframe src="https://ai.demo.composetheweb.com/" className="aiframe" scrolling="no" />
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ContactPageProps>> {
  return {
    props: {
      ...(await getGlobalElements(context)),
    },
  }
}
