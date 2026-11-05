import{j as r}from"./iframe-BZzSz7BH.js";import{O as b}from"./object-table-NRkhlIEe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9ayMrBZ.js";import{u as g}from"./useOsdkClient-PElMpwH_.js";import"./preload-helper-CNCm3N6L.js";import"./Table-DL08LYN0.js";import"./index-B0_2NaMN.js";import"./Dialog-CENMOXYE.js";import"./cross-DZZxBCNz.js";import"./svgIconContainer-Dhl9__RH.js";import"./useBaseUiId-DkyKYNDq.js";import"./InternalBackdrop-Dz8c766k.js";import"./composite-BTQMDNX2.js";import"./index-BRGRaTrf.js";import"./index-CuHAqEhQ.js";import"./index-B8CHFzHN.js";import"./useEventCallback-s0-nnfm7.js";import"./SkeletonBar-BHiQfJ3N.js";import"./LoadingCell-Cc7BBtdp.js";import"./ColumnConfigDialog-DvyEztzL.js";import"./DraggableList-Bgkxbtf8.js";import"./search-Bp2lXg3F.js";import"./Input-D_wnf1zt.js";import"./useControlled-DTdqQX0O.js";import"./Button-DjbJHqTl.js";import"./small-cross-duhx-2IW.js";import"./ActionButton-CPOmOwV3.js";import"./Checkbox-YrYlJhGX.js";import"./useValueChanged-BTOjYRe_.js";import"./CollapsiblePanel-Cn1JiM3m.js";import"./MultiColumnSortDialog-BhDJP-we.js";import"./MenuTrigger-Cojssmun.js";import"./CompositeItem-B-WQrem9.js";import"./ToolbarRootContext-BbBpvcok.js";import"./getDisabledMountTransitionStyles-CVVnoiuw.js";import"./getPseudoElementBounds-CNHnb_Zs.js";import"./chevron-down-BtcR6Z3d.js";import"./index-CKPZYnP1.js";import"./error-CUMr5i6e.js";import"./BaseCbacBanner-Bb8aDwze.js";import"./makeExternalStore-8dQqHLia.js";import"./Tooltip-DpHxoLtf.js";import"./PopoverPopup-DSpnAg_f.js";import"./debounce-bMnFMRzg.js";import"./tick-DNPnh0Dr.js";import"./DropdownField-squh2G6a.js";import"./isEqual-fKiVWW2e.js";import"./withOsdkMetrics-EMHKCnPx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
