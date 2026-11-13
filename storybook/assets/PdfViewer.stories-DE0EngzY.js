import{j as r,M as s}from"./iframe-DAHj67mi.js";import{P as p}from"./pdf-viewer-ziyXgd-0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DEfrLcuG.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DuXHJIaj.js";import"./index-jtr0hjnV.js";import"./BasePdfViewer-BsvP2XNk.js";import"./BasePdfViewer.module.css-DpuXPm6g.js";import"./PdfViewerAnnotationLayer-DvdFO1Tf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzfzHJ2i.js";import"./PdfViewerOutlineSidebar-BImWy6jw.js";import"./PdfViewerSidebarHeader-1WT9paqS.js";import"./useBaseUiId-C8n2JbgI.js";import"./useControlled-wTpIHr1L.js";import"./CompositeRoot-CqS98yWV.js";import"./CompositeItem-ylUTChcd.js";import"./ToolbarRootContext-D0N5miEu.js";import"./composite-BjTY1dgM.js";import"./svgIconContainer-R6fLsDAI.js";import"./PdfViewerSearchBar-Cpu4XIuw.js";import"./chevron-up-DmqXspWv.js";import"./chevron-down-CDzCov52.js";import"./cross-BvmJ2kUU.js";import"./PdfViewerSidebar-DYIbEUvd.js";import"./index-B0icYv8E.js";import"./index-B2dUJ_mM.js";import"./index-BOzM1AoU.js";import"./PdfViewerToolbar-BLxjHwbR.js";import"./Button-D3ukGqLV.js";import"./chevron-right-Duvynerl.js";import"./Input-BqNeXUfN.js";import"./search-DlMMVas5.js";import"./spin-CoSzXWeY.js";import"./error-kGSlj1sb.js";import"./withOsdkMetrics-DRVx42Qf.js";import"./makeExternalStore-CclpbdPf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
