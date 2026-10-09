import{j as r,M as s}from"./iframe-D64bY6TH.js";import{P as p}from"./pdf-viewer-QCGZ-r2B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BAt46nVb.js";import"./preload-helper-C76Jrfws.js";import"./PdfViewer-B6O7LgkD.js";import"./index-Cc3FeXj1.js";import"./BasePdfViewer-CFL3YK33.js";import"./BasePdfViewer.module.css-H_jNdxbB.js";import"./PdfViewerAnnotationLayer-CaXWuSDf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-URWBq_1k.js";import"./PdfViewerOutlineSidebar-DZ9YUnFO.js";import"./PdfViewerSidebarHeader-BBeigdU4.js";import"./useBaseUiId-CFOcLwn4.js";import"./useControlled-CxTqzmL5.js";import"./CompositeRoot-CwbZNo2h.js";import"./CompositeItem-9LTTeiMZ.js";import"./ToolbarRootContext-CrHW8pig.js";import"./composite-DAqKTlgI.js";import"./svgIconContainer-CfgNuiYE.js";import"./PdfViewerSearchBar-BCQv2Lv3.js";import"./chevron-up-IUoQvKLG.js";import"./chevron-down-CihExyy-.js";import"./cross-D6Cdabtd.js";import"./PdfViewerSidebar-D7GrU2b0.js";import"./index-Dr8-JDhp.js";import"./index-bp5PTA0n.js";import"./index-B70IpAtL.js";import"./PdfViewerToolbar-DHtc598n.js";import"./Button-BmCoWmmM.js";import"./chevron-right-CuyREyzc.js";import"./Input-QZumNvU1.js";import"./search-Bfu3ziqv.js";import"./spin-CH4EfTcK.js";import"./error-DEgvCPew.js";import"./withOsdkMetrics-Dszg8kI0.js";import"./makeExternalStore-DhnEC1sn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
