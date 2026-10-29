import{j as r,M as s}from"./iframe-wwmAnZJB.js";import{P as p}from"./pdf-viewer-B87pAr1Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BWKiNNGG.js";import"./preload-helper-OhSO-U7q.js";import"./PdfViewer-CSBKivnF.js";import"./index-CR7mf95j.js";import"./BasePdfViewer-BPdASDg2.js";import"./BasePdfViewer.module.css-D8iEHsOD.js";import"./PdfViewerAnnotationLayer-BPnttVc4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DXkYD18S.js";import"./PdfViewerOutlineSidebar-C5svY1Un.js";import"./PdfViewerSidebarHeader-jy2_-VIi.js";import"./useBaseUiId-BR51eynY.js";import"./useControlled-BhrECPzc.js";import"./CompositeRoot-CL_-gsPL.js";import"./CompositeItem-CH57RHZb.js";import"./ToolbarRootContext-Cy5wkqrQ.js";import"./composite-DgNImKCX.js";import"./svgIconContainer-BudxXKul.js";import"./PdfViewerSearchBar-BxcdE5Jc.js";import"./chevron-up-CAdbtw3e.js";import"./chevron-down-wdzezIea.js";import"./cross-8dD8CYIw.js";import"./PdfViewerSidebar-CUyRJP7m.js";import"./index-DSCiiu0M.js";import"./index-DnWxg9AP.js";import"./index-ChdMXjiA.js";import"./PdfViewerToolbar-DqVK4pts.js";import"./Button-EDCPExC6.js";import"./chevron-right-CDtLNb-j.js";import"./Input-dfiNY8gr.js";import"./search-C8QAasXE.js";import"./spin-DJTYmaTx.js";import"./error--BpoQgxv.js";import"./withOsdkMetrics-C4BCCJj2.js";import"./makeExternalStore-CkSN1CwB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
