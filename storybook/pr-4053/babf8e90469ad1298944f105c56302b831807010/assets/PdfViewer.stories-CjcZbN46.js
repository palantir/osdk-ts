import{j as r,M as s}from"./iframe-C2B-VFRS.js";import{P as p}from"./pdf-viewer-RFPFgscr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C12n5SpM.js";import"./preload-helper-gVkjcPWs.js";import"./PdfViewer-BnNm0e04.js";import"./index-CibutWy_.js";import"./BasePdfViewer-DbcJqAYI.js";import"./BasePdfViewer.module.css-ClJBsa4f.js";import"./PdfViewerAnnotationLayer-CEJ4vnMs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCBUx51L.js";import"./PdfViewerOutlineSidebar-DorDjm30.js";import"./PdfViewerSidebarHeader-BdWEGK9M.js";import"./useBaseUiId-VQFtxAep.js";import"./useControlled-BCVnds_y.js";import"./CompositeRoot-s3xLWfTO.js";import"./CompositeItem-CfE-UZcL.js";import"./ToolbarRootContext-CfiR31pw.js";import"./composite-C2cqujK-.js";import"./svgIconContainer-CM1uLq-t.js";import"./PdfViewerSearchBar-BKH-_z5m.js";import"./chevron-up-BbSY1X_p.js";import"./chevron-down-BhxKf9kJ.js";import"./cross-mlHeLHgf.js";import"./PdfViewerSidebar-CaM3DwPJ.js";import"./index-PJ8iOaai.js";import"./index-DV_a4T4n.js";import"./index-BPBEeE2g.js";import"./PdfViewerToolbar-L0lGAOxR.js";import"./Button-Mk-BPYCM.js";import"./chevron-right-Bx9TdPAT.js";import"./Input-FVPyTFRQ.js";import"./search-BLJN7rrF.js";import"./spin-CQrasA5p.js";import"./error-qCP94tkU.js";import"./withOsdkMetrics-CLj2Tgqh.js";import"./makeExternalStore-D8T9YNbX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
