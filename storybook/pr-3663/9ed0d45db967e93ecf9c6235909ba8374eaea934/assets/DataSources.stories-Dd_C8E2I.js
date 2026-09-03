import{j as r}from"./iframe-DEpmrtbG.js";import{O as b}from"./object-table-BJGCVnLx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-gdfnbrl6.js";import{u as g}from"./useOsdkClient-CRefb4Et.js";import"./preload-helper-Bgg2uCW1.js";import"./Table-DMdwAM2N.js";import"./index-DgxVBE9v.js";import"./Dialog-BL-J1NYg.js";import"./cross-CrU6nGJP.js";import"./svgIconContainer-DWCXHbm6.js";import"./useBaseUiId-CETaC9GH.js";import"./InternalBackdrop-BJf2S27G.js";import"./composite-DBo_GtSD.js";import"./index-gBnbSOoM.js";import"./index-BsQx4f-z.js";import"./index-By9oDPdz.js";import"./useEventCallback-DWcDc9KV.js";import"./SkeletonBar-qEbRKPf1.js";import"./LoadingCell--WEN8DBK.js";import"./ColumnConfigDialog-Dph9Pt0O.js";import"./DraggableList-ce_8KGNq.js";import"./search-B4TawZLP.js";import"./Input-DnQqAjUi.js";import"./useControlled-CxIvThFp.js";import"./Button-C-DZ3Yzq.js";import"./small-cross-wFOvE6mp.js";import"./ActionButton-CmDGjkch.js";import"./Checkbox-BcwdHxHD.js";import"./useValueChanged-CVjECJ2T.js";import"./CollapsiblePanel-BCcZQ43x.js";import"./MultiColumnSortDialog-CKQGaall.js";import"./MenuTrigger-CApU9aj8.js";import"./CompositeItem-LCipfobg.js";import"./ToolbarRootContext-BN4SwV4N.js";import"./getDisabledMountTransitionStyles-hbhLeVH_.js";import"./getPseudoElementBounds-DeGavAO8.js";import"./chevron-down-Cvm0d31k.js";import"./index-Ddv81Ai4.js";import"./error-DVsFEdhY.js";import"./BaseCbacBanner--TlWJCKJ.js";import"./makeExternalStore-BaPAj8aa.js";import"./Tooltip-DFM3nmx3.js";import"./PopoverPopup-BCiIUJbQ.js";import"./debounce-BECAHL4g.js";import"./tick-C59Dr2Db.js";import"./DropdownField-D0CE821u.js";import"./isEqual-Cz0QPFxe.js";import"./withOsdkMetrics-DnWSlC-3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
