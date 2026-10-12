import{j as r,M as s}from"./iframe-Bnd7pp_H.js";import{P as p}from"./pdf-viewer-CIN3PuXv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ChHH96EU.js";import"./preload-helper-CQp4ttna.js";import"./PdfViewer-DPV-vSrM.js";import"./index-Dq4Q7R9n.js";import"./BasePdfViewer-Yatb-5sX.js";import"./BasePdfViewer.module.css-B2fzZ5E1.js";import"./PdfViewerAnnotationLayer-E4xwjjkH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LldUq08d.js";import"./PdfViewerOutlineSidebar-CWUlHRRU.js";import"./PdfViewerSidebarHeader-D_agBTDN.js";import"./useBaseUiId-C3FoEBlZ.js";import"./useControlled-BJ3TNVDx.js";import"./CompositeRoot-DYTIixOI.js";import"./CompositeItem-B1cp5WfN.js";import"./ToolbarRootContext-V1EJjV6d.js";import"./composite-ChdURaw7.js";import"./svgIconContainer-BHFCuUIe.js";import"./PdfViewerSearchBar-CTqxnrak.js";import"./chevron-up-BxknkjiV.js";import"./chevron-down-CkIljS9G.js";import"./cross-nf57os0A.js";import"./PdfViewerSidebar-6nzLJt3_.js";import"./index-L92dEHBQ.js";import"./index-CdD4spHg.js";import"./index-CFBknfgj.js";import"./PdfViewerToolbar-tLmp_2BF.js";import"./Button-wIX1QNwU.js";import"./chevron-right-KCQ-vZus.js";import"./Input-Dh0I0gBB.js";import"./search-C2rfWWoo.js";import"./spin-B9zzD4jt.js";import"./error-vnD_TY7d.js";import"./withOsdkMetrics-CtQ2hxG_.js";import"./makeExternalStore-BZ_ZxDJW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
