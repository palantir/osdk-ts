import{j as r,M as s}from"./iframe-Cko_WFf-.js";import{P as p}from"./pdf-viewer-CJOQgjPd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-VJjcOgSp.js";import"./preload-helper-Cs73q2ui.js";import"./PdfViewer-dhPmORgN.js";import"./index-2T8Wwein.js";import"./BasePdfViewer-Y5m6x4p2.js";import"./BasePdfViewer.module.css-BA50bBA1.js";import"./PdfViewerAnnotationLayer-BAmXdimS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BzzmQE_z.js";import"./PdfViewerOutlineSidebar-Bv0Rdfbo.js";import"./PdfViewerSidebarHeader-DBGdsrqu.js";import"./useBaseUiId-DydFiAor.js";import"./useControlled-D2dKgCSU.js";import"./CompositeRoot-1E7Vf2ve.js";import"./CompositeItem-CFHidUeB.js";import"./ToolbarRootContext-BZHxz8Zf.js";import"./composite-BgWWCC0G.js";import"./svgIconContainer-DUJTWNCq.js";import"./PdfViewerSearchBar-DBCQM3qa.js";import"./chevron-up-C8SJB52d.js";import"./chevron-down-tjDGGRSV.js";import"./cross-CBXHEXHr.js";import"./PdfViewerSidebar-B-juI44N.js";import"./index-gK3sTX7L.js";import"./index-C5PQsA1_.js";import"./index-Ba2bjKcU.js";import"./PdfViewerToolbar-Clm5-4JU.js";import"./Button-B8X7gllj.js";import"./chevron-right-rKABFiRu.js";import"./Input-CP5Ce819.js";import"./search-DlsTvmsp.js";import"./spin-Ah2pDuGk.js";import"./error-iyVGDwHQ.js";import"./withOsdkMetrics-jyd-_lK5.js";import"./makeExternalStore-CEUQtvPO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
