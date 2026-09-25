import{j as r,M as s}from"./iframe-C0-x1FP0.js";import{P as p}from"./pdf-viewer-DHObnRwr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrOGaFn4.js";import"./preload-helper-DCX9k7ir.js";import"./PdfViewer-D-04VGlR.js";import"./index-DV22TdK8.js";import"./BasePdfViewer-n_A_aSlw.js";import"./BasePdfViewer.module.css-COk22H9y.js";import"./PdfViewerAnnotationLayer-Vh7fgtor.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LjUtWbe-.js";import"./PdfViewerOutlineSidebar-DgIYYm7Q.js";import"./PdfViewerSidebarHeader-CJx0A1Um.js";import"./useBaseUiId-CA7uGIeg.js";import"./useControlled-Dp-jMyqd.js";import"./CompositeRoot-BxKznIJC.js";import"./CompositeItem-D0Pwm5JG.js";import"./ToolbarRootContext-DthEPhMn.js";import"./composite-Dy-B8Ijy.js";import"./svgIconContainer-BSxvLIZD.js";import"./PdfViewerSearchBar-C6gaboer.js";import"./chevron-up-B1ujpv-A.js";import"./chevron-down-Tbopdf5u.js";import"./cross-yFQp_D_Z.js";import"./PdfViewerSidebar-BW-W-qgd.js";import"./index-ai2s7LZ-.js";import"./index-DUQSD1NB.js";import"./index-C7QUHUmQ.js";import"./PdfViewerToolbar-DqSpTmZM.js";import"./Button-CvK_tZY2.js";import"./chevron-right-CfSBhTtI.js";import"./Input-BXkRChlq.js";import"./search-Vl3MAPNS.js";import"./spin-DLf8fgCZ.js";import"./error-VkCpPEhJ.js";import"./withOsdkMetrics-Dw6CTACt.js";import"./makeExternalStore-C9rMI5OP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
