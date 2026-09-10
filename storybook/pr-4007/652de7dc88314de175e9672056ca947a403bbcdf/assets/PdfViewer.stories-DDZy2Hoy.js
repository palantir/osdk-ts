import{j as r,M as s}from"./iframe-oqiETzjs.js";import{P as p}from"./pdf-viewer-D_CoMYY3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-fjJCNdkj.js";import"./preload-helper-DY6GVQaH.js";import"./PdfViewer-780MJEmn.js";import"./index-ZtK2AEsr.js";import"./BasePdfViewer-rv4NYuNY.js";import"./BasePdfViewer.module.css-BbRLefkY.js";import"./PdfViewerAnnotationLayer-BhpTHlfj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcA-uIkJ.js";import"./PdfViewerOutlineSidebar-C6nrhfhv.js";import"./PdfViewerSidebarHeader-kdxW0ADl.js";import"./useBaseUiId-DB5E9Fa7.js";import"./useControlled-CGzg1vVh.js";import"./CompositeRoot-CI2Wsamv.js";import"./CompositeItem-D_YoAFpQ.js";import"./ToolbarRootContext-B7aYE2db.js";import"./composite-DUWgXaax.js";import"./svgIconContainer-C-hQGfLn.js";import"./PdfViewerSearchBar-CllSMMXZ.js";import"./chevron-up-BENCMOJd.js";import"./chevron-down-B5wuH3n5.js";import"./cross-CMMlEidH.js";import"./PdfViewerSidebar-C_ogui_x.js";import"./index-Dg5Wo44B.js";import"./index-D6-tP7ey.js";import"./index-BcAnoDMR.js";import"./PdfViewerToolbar-Cxfk5R4J.js";import"./Button-BnpV_XVG.js";import"./chevron-right-CERLd2T4.js";import"./Input-DVeUb6S9.js";import"./search-Hb2jWcJP.js";import"./spin-p38zMPtA.js";import"./error-B914xSJQ.js";import"./withOsdkMetrics-tcmfqEow.js";import"./makeExternalStore-BIBGwZYl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
