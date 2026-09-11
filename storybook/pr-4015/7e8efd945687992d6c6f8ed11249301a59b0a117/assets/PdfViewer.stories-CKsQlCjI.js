import{j as r,M as s}from"./iframe-B9e47JAt.js";import{P as p}from"./pdf-viewer-YJUR1Ml4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2JHdH9to.js";import"./preload-helper-BRB8NOW_.js";import"./PdfViewer-Dw7g_3f7.js";import"./index-C_6xtQCD.js";import"./BasePdfViewer-DVK7Rdzi.js";import"./BasePdfViewer.module.css-NmR1hWY2.js";import"./PdfViewerAnnotationLayer-BtHUIQaj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hjQgBr5N.js";import"./PdfViewerOutlineSidebar-sxSRcT4O.js";import"./PdfViewerSidebarHeader-CCYfa_L-.js";import"./useBaseUiId-VqyZRI0q.js";import"./useControlled-BBsT5_Nc.js";import"./CompositeRoot-DTiWRTs2.js";import"./CompositeItem-BJasfKU0.js";import"./ToolbarRootContext-DycOOcjn.js";import"./composite-BethEnTN.js";import"./svgIconContainer-dHjn9I5b.js";import"./PdfViewerSearchBar-Bjxv5_GN.js";import"./chevron-up-fXEhmQfk.js";import"./chevron-down-ChPDwIrO.js";import"./cross-ymxOUFGj.js";import"./PdfViewerSidebar-y2Yoa7uG.js";import"./index-DY7BzFjI.js";import"./index-D_iw6W8D.js";import"./index-BBqzf2o3.js";import"./PdfViewerToolbar-B-lEs24v.js";import"./Button-z2FVGTG2.js";import"./chevron-right-Cho82Dwe.js";import"./Input-CPGlOkat.js";import"./search-BejwSAXg.js";import"./spin-Cet6JoNq.js";import"./error-pDyLX5xW.js";import"./withOsdkMetrics-CmtdaepB.js";import"./makeExternalStore-CBsYhUmA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
