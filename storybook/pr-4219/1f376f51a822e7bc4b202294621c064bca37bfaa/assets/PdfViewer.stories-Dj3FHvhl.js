import{j as r,M as s}from"./iframe-BTFFJnjn.js";import{P as p}from"./pdf-viewer-C65ptpTS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dt2TxtgW.js";import"./preload-helper-CSZsPkfX.js";import"./PdfViewer-j-_aIMAj.js";import"./index-C_Z722LV.js";import"./BasePdfViewer-DtUUy3Mc.js";import"./BasePdfViewer.module.css-Ds6_q11B.js";import"./PdfViewerAnnotationLayer-Ckk7ck3g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ClJidvBg.js";import"./PdfViewerOutlineSidebar-DPrVC1Vx.js";import"./PdfViewerSidebarHeader-DKZJHGRH.js";import"./useBaseUiId-DHyYX2RX.js";import"./useControlled-DbgXwRAA.js";import"./CompositeRoot-BiHmR4nq.js";import"./CompositeItem-0772M-C_.js";import"./ToolbarRootContext-BsMzvLUB.js";import"./composite-DBRlpOlr.js";import"./svgIconContainer-gp9RWo3r.js";import"./PdfViewerSearchBar-C5N9eljC.js";import"./chevron-up-Dn_PwlAj.js";import"./chevron-down-C34taKQb.js";import"./cross-LRAZ9qps.js";import"./PdfViewerSidebar-DK5WPVFv.js";import"./index-Dw0-j0VX.js";import"./index-B4NnbGlh.js";import"./index-CrQcuE9G.js";import"./PdfViewerToolbar-Bv7AYStu.js";import"./Button-XND01Fh-.js";import"./chevron-right-0qEElbUX.js";import"./Input-D5tlOD_j.js";import"./search-DOiBQX63.js";import"./spin-Ch85uTJn.js";import"./error-D1AJOnUs.js";import"./withOsdkMetrics-B7f6_6X-.js";import"./makeExternalStore-Dk37SoTO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
