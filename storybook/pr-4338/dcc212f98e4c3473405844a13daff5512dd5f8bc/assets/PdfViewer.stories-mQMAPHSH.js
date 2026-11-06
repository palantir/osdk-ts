import{j as r,M as s}from"./iframe-B1HXhuEn.js";import{P as p}from"./pdf-viewer-DNuWqkK8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BUzaXd37.js";import"./preload-helper-BS8U_QDO.js";import"./PdfViewer-DjsBd6gg.js";import"./index-CXhpMXAp.js";import"./BasePdfViewer-Da2ixlHT.js";import"./BasePdfViewer.module.css-D5KLXgvh.js";import"./PdfViewerAnnotationLayer-BRCkDagf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Xh7njWXm.js";import"./PdfViewerOutlineSidebar-DPG_14jG.js";import"./PdfViewerSidebarHeader-CLmyEgG8.js";import"./useBaseUiId-hdD3ov8Q.js";import"./useControlled-BhBQWUYI.js";import"./CompositeRoot-B5zvPrAA.js";import"./CompositeItem-BMKkQOtg.js";import"./ToolbarRootContext-37rMdX1G.js";import"./composite-DedIsNbG.js";import"./svgIconContainer-DzUf9ieK.js";import"./PdfViewerSearchBar-DUCzTLyX.js";import"./chevron-up-CjrnijYZ.js";import"./chevron-down-D8b4kkiL.js";import"./cross-BttX5lBy.js";import"./PdfViewerSidebar-CgqkVx2b.js";import"./index-BpBIzBNY.js";import"./index-DPC2Y4e5.js";import"./index-3H2Ar6XW.js";import"./PdfViewerToolbar-Ed4IKZcN.js";import"./Button-C9BX79xl.js";import"./chevron-right-D8uc4NVJ.js";import"./Input-v3aPKgft.js";import"./search-oaLO-0GK.js";import"./spin-BUSlbGs7.js";import"./error-CgwFWGpg.js";import"./withOsdkMetrics-BDRjMbuS.js";import"./makeExternalStore-eAcHCFEV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
