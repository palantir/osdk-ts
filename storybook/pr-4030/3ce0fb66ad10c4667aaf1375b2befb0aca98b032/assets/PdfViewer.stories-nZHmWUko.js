import{j as r,M as s}from"./iframe-BpUcg2zG.js";import{P as p}from"./pdf-viewer-YKBin9bK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CLtRhxci.js";import"./preload-helper-B2UTcXFP.js";import"./PdfViewer-RHzqwqWk.js";import"./index-7N6MUyxI.js";import"./BasePdfViewer-v3WYOYLN.js";import"./BasePdfViewer.module.css-Cydyucur.js";import"./PdfViewerAnnotationLayer-CTNG6QY_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-NrJKiDfU.js";import"./PdfViewerOutlineSidebar-Ci-dbmOq.js";import"./PdfViewerSidebarHeader-CnMjKSrv.js";import"./useBaseUiId-Bv3X91q5.js";import"./useControlled-DdOa4Phy.js";import"./CompositeRoot-B9uqyKHl.js";import"./CompositeItem-C2o4b7lZ.js";import"./ToolbarRootContext-J_sWFt16.js";import"./composite-CFjjm5Bq.js";import"./svgIconContainer-g6F9ILDM.js";import"./PdfViewerSearchBar-B-RD01W2.js";import"./chevron-up-8DTQKUOU.js";import"./chevron-down-C_xyEVbG.js";import"./cross-Qiz9Cl6T.js";import"./PdfViewerSidebar-CS-2iGaw.js";import"./index-jSPKquLn.js";import"./index-DI63_yx7.js";import"./index-CvEJHu1s.js";import"./PdfViewerToolbar-DpXVa2zI.js";import"./Button-DFuiuLIT.js";import"./chevron-right-DBVR7KMq.js";import"./Input-DaPfruQG.js";import"./search-BLWHV2Ka.js";import"./spin-BY7G0iGE.js";import"./error-DVz4lqLc.js";import"./withOsdkMetrics-D52jnuF5.js";import"./makeExternalStore-Cwp1LGPC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
