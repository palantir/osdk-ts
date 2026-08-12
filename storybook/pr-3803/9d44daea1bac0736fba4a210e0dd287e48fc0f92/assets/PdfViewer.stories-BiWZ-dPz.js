import{j as r,M as s}from"./iframe-DY5oFFGp.js";import{P as p}from"./pdf-viewer-CsJhuwJy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BlSuRnmy.js";import"./preload-helper-BXi2a6I0.js";import"./PdfRenderer-F3O2-H7K.js";import"./index-oMhfC8Kw.js";import"./PdfViewer-8cXReooq.js";import"./PdfViewer.module.css-Daqa7IZe.js";import"./PdfViewerAnnotationLayer-BBoAoGDd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-AWtO9fvH.js";import"./PdfViewerOutlineSidebar-BDYgPaL1.js";import"./PdfViewerSidebarHeader-DuUdZUQP.js";import"./useBaseUiId-BY-XTexC.js";import"./useControlled-Dzg4K4oI.js";import"./CompositeRoot-DvTsFGHW.js";import"./CompositeItem-mas1MCsD.js";import"./ToolbarRootContext-Dt5uDgd5.js";import"./composite-DcO2MQSU.js";import"./svgIconContainer-FemtaYki.js";import"./PdfViewerSearchBar-CI4AURAs.js";import"./chevron-up-D-_fHuLH.js";import"./chevron-down-ClPPaZyK.js";import"./cross-CrLmq7i6.js";import"./PdfViewerSidebar-C6jJkP5q.js";import"./index-D67MIB25.js";import"./index-CgbXm8hK.js";import"./index-BKhB25n7.js";import"./PdfViewerToolbar-Dk7PiSDk.js";import"./Button-3kT2y51o.js";import"./chevron-right-DNzxtKG0.js";import"./Input-nNrj-1aN.js";import"./search-fXpFyeuf.js";import"./spin-CIKyGRXk.js";import"./error-TrJIu1GL.js";import"./withOsdkMetrics-C7WGUV66.js";import"./makeExternalStore-BILayTtp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
