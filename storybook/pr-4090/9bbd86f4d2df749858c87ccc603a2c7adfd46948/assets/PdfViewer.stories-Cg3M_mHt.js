import{j as r,M as s}from"./iframe-BcZul-5h.js";import{P as p}from"./pdf-viewer-CugacBgS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B24y9t37.js";import"./preload-helper-CmDzzbHA.js";import"./PdfViewer-C0kpH8On.js";import"./index-DzJXuXA1.js";import"./BasePdfViewer-JNO9nlC-.js";import"./BasePdfViewer.module.css-CddMtpx8.js";import"./PdfViewerAnnotationLayer-CPyMJ0Pz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9y42wEl.js";import"./PdfViewerOutlineSidebar-Bfu8mx5-.js";import"./PdfViewerSidebarHeader-Qgp0sOly.js";import"./useBaseUiId-BR4pV0Lr.js";import"./useControlled-eXBZEo_R.js";import"./CompositeRoot-B5Oq5aZK.js";import"./CompositeItem-DOpNxc2s.js";import"./ToolbarRootContext-BozYkP2N.js";import"./composite-C_4CRh4u.js";import"./svgIconContainer-RYnvKxQV.js";import"./PdfViewerSearchBar-fwmRJTWv.js";import"./chevron-up-CX8QcSNM.js";import"./chevron-down-BTve9A2e.js";import"./cross-C_wTApPn.js";import"./PdfViewerSidebar-80bbXymV.js";import"./index-C_ypGm3c.js";import"./index-CWco2ihj.js";import"./index-pZeQx-_G.js";import"./PdfViewerToolbar-J7K2ZyNJ.js";import"./Button-soVXPdsa.js";import"./chevron-right-DLxFlsYB.js";import"./Input--zoqJ2tF.js";import"./search-Bzu1qjP_.js";import"./spin-Bp-nM2BS.js";import"./error-BtC0qV1A.js";import"./withOsdkMetrics-C8vp2Jz9.js";import"./makeExternalStore-BaDKsdYc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
