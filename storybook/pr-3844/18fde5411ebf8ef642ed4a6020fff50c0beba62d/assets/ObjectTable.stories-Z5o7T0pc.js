import{j as i}from"./iframe-HbxVHZeS.js";import{O as p}from"./object-table-CWaV2LZ7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8o9zSDS.js";import"./preload-helper-DKTEKqDP.js";import"./Table-CT7vgj8m.js";import"./index-_HuXWBMo.js";import"./Dialog-CcJYPdWy.js";import"./cross-Bbtec1AH.js";import"./svgIconContainer-DB1CdLm7.js";import"./useBaseUiId-CeUDsPHA.js";import"./InternalBackdrop-Bp2koLwT.js";import"./composite-0yZaiGel.js";import"./index-DMqlf5ki.js";import"./index-Cd-PRAMm.js";import"./index-BneZaifa.js";import"./useEventCallback-DKAOz3g2.js";import"./SkeletonBar-CZC-qmq0.js";import"./LoadingCell-CZYj7tK-.js";import"./ColumnConfigDialog-C25ouUTD.js";import"./DraggableList-J7E_9wyv.js";import"./search-DEtheuwO.js";import"./Input-V8GsltIX.js";import"./useControlled-0_Lx4vTT.js";import"./isEqual-CPkuV9kT.js";import"./isObject-Bk8QKs7M.js";import"./Button-hh7S8JbN.js";import"./ActionButton-DkaChMpJ.js";import"./Checkbox-C-42zxVd.js";import"./useValueChanged-ZO3to8uj.js";import"./CollapsiblePanel-DBh4BJ4h.js";import"./MultiColumnSortDialog-Cy_w-Zl-.js";import"./MenuTrigger-B8bcIin6.js";import"./CompositeItem-DlRQsEAc.js";import"./ToolbarRootContext-Bfx00Fpp.js";import"./getDisabledMountTransitionStyles-ChNDk6oM.js";import"./getPseudoElementBounds-B2F2Kv0M.js";import"./chevron-down-CsImW_M5.js";import"./index-clvcww1x.js";import"./error-_Ix0v8YA.js";import"./BaseCbacBanner-CbscbDa5.js";import"./makeExternalStore-CeeZV4L3.js";import"./Tooltip-DS_9ZYJ6.js";import"./PopoverPopup-BVyWIjI8.js";import"./toNumber-SyMlmTqK.js";import"./useOsdkClient-LkxmiGDs.js";import"./tick-ByIrFSAp.js";import"./DropdownField-DdueSsuv.js";import"./withOsdkMetrics-B9ZHRpAC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
