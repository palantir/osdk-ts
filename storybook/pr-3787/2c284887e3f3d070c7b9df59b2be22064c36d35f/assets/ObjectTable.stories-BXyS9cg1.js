import{j as i}from"./iframe-COpzlCaB.js";import{O as p}from"./object-table-DJ92aS6o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hR2tH-j7.js";import"./preload-helper-BkdBjdKP.js";import"./Table-B_uNBNPU.js";import"./index-C84ec9Pj.js";import"./Dialog-CxYLECuh.js";import"./cross-5K3lKZgy.js";import"./svgIconContainer-CIaQ8xsd.js";import"./useBaseUiId-DFFRH3M1.js";import"./InternalBackdrop-BGR9QnKp.js";import"./composite-D23jvVzu.js";import"./index-B9im3oSs.js";import"./index-BRjWtFt3.js";import"./index-Dc7tlAZa.js";import"./useEventCallback-DBecqAz1.js";import"./SkeletonBar-BTUNJLvy.js";import"./LoadingCell-BloyYvyP.js";import"./ColumnConfigDialog-KmMC_kSL.js";import"./DraggableList-D5KaB0DV.js";import"./search-N-S2SVsa.js";import"./Input-C6sS8Woo.js";import"./useControlled-CbqA1NEj.js";import"./isEqual-DNTJKOQe.js";import"./isObject-B1hsr0CW.js";import"./Button-DI3ND7oX.js";import"./ActionButton-CuQ7ojxa.js";import"./Checkbox-DM3ynsaz.js";import"./useValueChanged-Cdfs0bfp.js";import"./CollapsiblePanel-B9zex5wE.js";import"./MultiColumnSortDialog-CrKVXV03.js";import"./MenuTrigger-CYdE5rJl.js";import"./CompositeItem-dCINd5Kj.js";import"./ToolbarRootContext-q4CS8Gcs.js";import"./getDisabledMountTransitionStyles-BRgnArrH.js";import"./getPseudoElementBounds-CMpcS53e.js";import"./chevron-down-BLPE-Xtj.js";import"./index-q7IUoNRd.js";import"./error-DyfqkQ_Z.js";import"./BaseCbacBanner-OBrHu_gM.js";import"./makeExternalStore-BOVYqmIl.js";import"./Tooltip-0w7WZ6Hp.js";import"./PopoverPopup-P_j5iR6u.js";import"./toNumber-B-aiQ8lU.js";import"./useOsdkClient-BVs-JKNI.js";import"./tick-CjyMGD25.js";import"./DropdownField-JhM8pWuv.js";import"./withOsdkMetrics-Dr6Y0hve.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
