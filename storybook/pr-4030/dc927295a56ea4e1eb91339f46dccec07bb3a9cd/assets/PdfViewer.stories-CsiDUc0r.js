import{j as r,M as s}from"./iframe-jYOV-b_F.js";import{P as p}from"./pdf-viewer-CyueVkhL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VU9DAwnG.js";import"./preload-helper-DU4dp1aN.js";import"./PdfViewer-wXfx82A1.js";import"./index-Dy8g3oXx.js";import"./BasePdfViewer-Dt5RYuXk.js";import"./BasePdfViewer.module.css-2iTEepBB.js";import"./PdfViewerAnnotationLayer-D-3OinKp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DypBEKox.js";import"./PdfViewerOutlineSidebar-Bx118aOl.js";import"./PdfViewerSidebarHeader-DAezCvdu.js";import"./useBaseUiId-D96OAV6j.js";import"./useControlled-BTG7h9NE.js";import"./CompositeRoot-CGLqELS-.js";import"./CompositeItem-kjf0evVY.js";import"./ToolbarRootContext-Cv9is8EX.js";import"./composite-BzmrUUlD.js";import"./svgIconContainer-CA_JwY2G.js";import"./PdfViewerSearchBar-a70vxhB1.js";import"./chevron-up-xJHgAzdd.js";import"./chevron-down-CXyzKCEE.js";import"./cross-CihzmSlG.js";import"./PdfViewerSidebar-Ymv_FWFS.js";import"./index-DpuVJhHU.js";import"./index-BeEj2nqC.js";import"./index-ClDKgmxW.js";import"./PdfViewerToolbar-BHWnaQnO.js";import"./Button-CWhgA2iR.js";import"./chevron-right-xrHWYcRg.js";import"./Input-BMUKzcaw.js";import"./search-D-KgauV4.js";import"./spin-gG8iViN3.js";import"./error-DuFL7DmE.js";import"./withOsdkMetrics-D5SCgg1V.js";import"./makeExternalStore-DApOP_f0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
