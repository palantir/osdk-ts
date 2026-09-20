import{j as r,M as s}from"./iframe-B6HE8r1l.js";import{P as p}from"./pdf-viewer-C2u8xs1O.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DrnFGRud.js";import"./preload-helper-EtA7hFCh.js";import"./PdfViewer-JBH3KPw-.js";import"./index-BCMaRUjb.js";import"./BasePdfViewer-CshYr1Px.js";import"./BasePdfViewer.module.css-Bwm-lxR6.js";import"./PdfViewerAnnotationLayer-Cvh8ZYTT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXqGBNqi.js";import"./PdfViewerOutlineSidebar-C8GHOH6v.js";import"./PdfViewerSidebarHeader-to2QQTWN.js";import"./useBaseUiId-BzcE0Rie.js";import"./useControlled-D5sOiBif.js";import"./CompositeRoot-BawgAxK0.js";import"./CompositeItem-DP3Bb3vo.js";import"./ToolbarRootContext-BVpWK1U-.js";import"./composite-djF9vkGv.js";import"./svgIconContainer-BsDMjwS6.js";import"./PdfViewerSearchBar-CX2NzQIe.js";import"./chevron-up-CnHOOmID.js";import"./chevron-down-DKIz5-M-.js";import"./cross-BjZ44SU2.js";import"./PdfViewerSidebar-D_BwmV_q.js";import"./index-CUfD7gtD.js";import"./index-CJscuqzO.js";import"./index-BkMjc3Zz.js";import"./PdfViewerToolbar-BNyVgHik.js";import"./Button-ResaMq3t.js";import"./chevron-right-0ArbSk61.js";import"./Input-_s7MN3wC.js";import"./search-CcV-m7jj.js";import"./spin-B-csq2mT.js";import"./error-BJZjh9bl.js";import"./withOsdkMetrics-OQ6oomXn.js";import"./makeExternalStore-C0P5U_f9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
