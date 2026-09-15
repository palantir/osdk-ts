import{j as r,M as s}from"./iframe-B2s0ilwM.js";import{P as p}from"./pdf-viewer-Ve6XA8Av.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B6dHB8by.js";import"./preload-helper-MMy8iX7M.js";import"./PdfViewer-FwpSK4Mi.js";import"./index-DUMP_Qp6.js";import"./BasePdfViewer-bdNzD6KG.js";import"./BasePdfViewer.module.css-B5qRKjBV.js";import"./PdfViewerAnnotationLayer-BY6AYxHZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgBphcsw.js";import"./PdfViewerOutlineSidebar-BNfOn-5r.js";import"./PdfViewerSidebarHeader-CD2ZKrmM.js";import"./useBaseUiId-BVH4GIbN.js";import"./useControlled-C3oDg3XB.js";import"./CompositeRoot-DAKn7CQy.js";import"./CompositeItem-DNqREtRU.js";import"./ToolbarRootContext-DDaNMj4N.js";import"./composite-DFa6zY9f.js";import"./svgIconContainer-DRCF-NHW.js";import"./PdfViewerSearchBar-BoWatNXc.js";import"./chevron-up-B8XrsyrL.js";import"./chevron-down-CW4_yRhZ.js";import"./cross-DZSba9zk.js";import"./PdfViewerSidebar-B1xAH-Y7.js";import"./index-ClsdzwAW.js";import"./index-mYTbhKt1.js";import"./index-DdqPMtaM.js";import"./PdfViewerToolbar-BjfeBleV.js";import"./Button-Bnx37qOJ.js";import"./chevron-right-Cn_emNUj.js";import"./Input-CjCyxjsG.js";import"./search-De6MFVaz.js";import"./spin-hHZaP7mv.js";import"./error-DeXC2vVV.js";import"./withOsdkMetrics-B_SFwrj7.js";import"./makeExternalStore-D_KS_COu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
