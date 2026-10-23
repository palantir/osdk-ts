import{j as r,M as s}from"./iframe-DH1LfSqj.js";import{P as p}from"./pdf-viewer-jxyhL9Rb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-isQjSrGE.js";import"./preload-helper-BtNGdpdU.js";import"./PdfViewer-iB7UgqBR.js";import"./index-BwVz3K80.js";import"./BasePdfViewer-CB439jzJ.js";import"./BasePdfViewer.module.css-CScGGnRW.js";import"./PdfViewerAnnotationLayer-C1H6ETsZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOhWODYZ.js";import"./PdfViewerOutlineSidebar-8KsXxJec.js";import"./PdfViewerSidebarHeader-C-dY5XMI.js";import"./useBaseUiId-CW3AoQkf.js";import"./useControlled-DAJs0K9A.js";import"./CompositeRoot-wx-Cg1Fn.js";import"./CompositeItem-ty0jR14S.js";import"./ToolbarRootContext-DNwYbqk6.js";import"./composite-DB-jEcsY.js";import"./svgIconContainer-GysfdOnF.js";import"./PdfViewerSearchBar-BosKD4Gv.js";import"./chevron-up-sEvUKmM2.js";import"./chevron-down-BcIj0xVN.js";import"./cross-CVAZ1iFx.js";import"./PdfViewerSidebar-CL3onbAm.js";import"./index-BAF1QDd0.js";import"./index-Dfpbq9fn.js";import"./index-Dt70WsCn.js";import"./PdfViewerToolbar-CXen7ryF.js";import"./Button-CC_D7kUc.js";import"./chevron-right-DQrNUJkA.js";import"./Input-BbVzkVzZ.js";import"./search-Cf7xLzNe.js";import"./spin-BpRxlyw5.js";import"./error-CvpqdC3I.js";import"./withOsdkMetrics-CkK0GNNa.js";import"./makeExternalStore-fduFP-zO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
