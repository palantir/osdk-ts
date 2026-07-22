import{j as r,M as s}from"./iframe-5Av9J7iC.js";import{P as p}from"./pdf-viewer-baMFKueJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DETf38yC.js";import"./preload-helper-DgaONgBe.js";import"./PdfRenderer-B6y9Nrio.js";import"./index-CakWirJ3.js";import"./PdfViewer-bhCK7bg6.js";import"./PdfViewer.module.css-D__6AYPg.js";import"./PdfViewerAnnotationLayer-8-zVjZFc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VicNMljF.js";import"./PdfViewerOutlineSidebar-BZBjWU1i.js";import"./PdfViewerSidebarHeader-jKVOllPK.js";import"./useBaseUiId-CTRvM3n9.js";import"./useControlled-CJSxX2mb.js";import"./CompositeRoot-0L5-XZKl.js";import"./CompositeItem-B_fNWGHp.js";import"./ToolbarRootContext-D9qLaZwz.js";import"./composite-CJUYG2Gd.js";import"./svgIconContainer-ChqgIZeY.js";import"./PdfViewerSearchBar-BII3tjRV.js";import"./chevron-up-Du8MGsA8.js";import"./chevron-down-DDBK_vjK.js";import"./cross-BFeZD4VG.js";import"./PdfViewerSidebar-uTm41A59.js";import"./index-DFSaCp3v.js";import"./index-B5XSfgME.js";import"./index-CePFmMhV.js";import"./PdfViewerToolbar-BEkFc16Z.js";import"./Button-DvaCRSj4.js";import"./chevron-right-Cz_YFwtT.js";import"./Input-CKLE5DGY.js";import"./search-i9LMQsdM.js";import"./spin-NfPAlLBj.js";import"./error-D7nzuD6f.js";import"./withOsdkMetrics-q4ppdfgP.js";import"./makeExternalStore-C_jIkJhs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
