import{j as r,M as s}from"./iframe-BwirHNbs.js";import{P as p}from"./pdf-viewer-DasLLZwi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CEWzCYDd.js";import"./preload-helper-BcRMcE6w.js";import"./PdfViewer-BJ1H34a8.js";import"./index-BmAPsQSt.js";import"./BasePdfViewer-B6-6ymUF.js";import"./BasePdfViewer.module.css-WkvafdIH.js";import"./PdfViewerAnnotationLayer-ZhFjnR_q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VU83tVHE.js";import"./PdfViewerOutlineSidebar-BFGKngVx.js";import"./PdfViewerSidebarHeader-DpWtu34P.js";import"./useBaseUiId-DmDKW149.js";import"./useControlled-KmS5bOnr.js";import"./CompositeRoot-BzCt9DWZ.js";import"./CompositeItem-DM1dTjJL.js";import"./ToolbarRootContext-DHUZ3-w7.js";import"./composite-B5RDHpm7.js";import"./svgIconContainer-2pSHGQCS.js";import"./PdfViewerSearchBar-n842c6ER.js";import"./chevron-up-C-5Juq-D.js";import"./chevron-down-D3Weizce.js";import"./cross-BGeKWzpP.js";import"./PdfViewerSidebar-CIPdQCKG.js";import"./index-pKQiofWN.js";import"./index-IvU-D_vM.js";import"./index-EqsE1RFo.js";import"./PdfViewerToolbar-CiJvRhDW.js";import"./Button-CN4mp3wI.js";import"./chevron-right-cmi6pNfc.js";import"./Input-wSOSKhCX.js";import"./search-DVE4XQYl.js";import"./spin-Byr7FLg8.js";import"./error-CL70nlEB.js";import"./withOsdkMetrics-CP7X3COO.js";import"./makeExternalStore-CdNCMpqS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
