import{j as r,M as s}from"./iframe-BPE8geBj.js";import{P as p}from"./pdf-viewer-1pAoZ6ln.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DCSpPVFP.js";import"./preload-helper-fxHDaWWz.js";import"./PdfViewer-B9Z1wwv1.js";import"./index-BSCIcc2m.js";import"./BasePdfViewer-oKaoV2Th.js";import"./BasePdfViewer.module.css-XPxFJ_o4.js";import"./PdfViewerAnnotationLayer-BMDBvbpv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzKsfrXd.js";import"./PdfViewerOutlineSidebar-hwC1a5dd.js";import"./PdfViewerSidebarHeader-X0eN1OKM.js";import"./useBaseUiId-S4ycFjYQ.js";import"./useControlled-C86FBi_K.js";import"./CompositeRoot-DkePixyg.js";import"./CompositeItem-DoL9OBNh.js";import"./ToolbarRootContext-Cyb9Wm9w.js";import"./composite-CvIKG9hN.js";import"./svgIconContainer-Ch3CgPVe.js";import"./PdfViewerSearchBar-9AsB9ndO.js";import"./chevron-up-DpZv0J-z.js";import"./chevron-down-CqglXqG-.js";import"./cross-BmJ5axqh.js";import"./PdfViewerSidebar-DupVlFR2.js";import"./index-Da6xMdfJ.js";import"./index-BOd13PhS.js";import"./index-D5QkM80p.js";import"./PdfViewerToolbar-D4ymNTJv.js";import"./Button-DB75dhIR.js";import"./chevron-right-BGu9yViC.js";import"./Input-RElBojM0.js";import"./search-D5bB9k-q.js";import"./spin-38S3LygU.js";import"./error-BXvIUBOQ.js";import"./withOsdkMetrics-BtOTCRxI.js";import"./makeExternalStore-Bb0lbQEV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
