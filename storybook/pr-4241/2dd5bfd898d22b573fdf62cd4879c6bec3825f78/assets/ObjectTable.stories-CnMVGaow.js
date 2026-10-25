import{j as i}from"./iframe-Cz66haSq.js";import{O as p}from"./object-table-DgHEroMX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9vlxn5-.js";import"./preload-helper-xhSAljX0.js";import"./Table-CX8QpB3V.js";import"./index-BUXfO4Ju.js";import"./Dialog-BrdTDQh1.js";import"./cross-D9OamDgN.js";import"./svgIconContainer-DHL3SwmU.js";import"./useBaseUiId--zYyuape.js";import"./InternalBackdrop-Cy2hO_QK.js";import"./composite-BA9faNy6.js";import"./index-0XJJDvoy.js";import"./index-DfGIRzxo.js";import"./index-CP2YAN8J.js";import"./useEventCallback-CBZ6ta6R.js";import"./SkeletonBar-n0_YCfbh.js";import"./LoadingCell-DHeCnijo.js";import"./ColumnConfigDialog-CV9-HJ4X.js";import"./DraggableList-DJBRcK0Q.js";import"./search-ARM4tErG.js";import"./Input-Bxz-Dd7O.js";import"./useControlled-C9QmB7A0.js";import"./Button-C0vlEOkp.js";import"./small-cross-BvAVeELv.js";import"./ActionButton-JYX3c3SK.js";import"./Checkbox-DO5ZYVN7.js";import"./useValueChanged-CFnHS4Ph.js";import"./CollapsiblePanel-CDnOBlfI.js";import"./MultiColumnSortDialog-P-1eLcJI.js";import"./MenuTrigger-wVH_z4yX.js";import"./CompositeItem-hCCScXH4.js";import"./ToolbarRootContext-B9foH7Qy.js";import"./getDisabledMountTransitionStyles-Df62lxLU.js";import"./getPseudoElementBounds-KBPA7oty.js";import"./chevron-down-e8LYC-cq.js";import"./index-CWknVfE8.js";import"./error-CctugoDe.js";import"./BaseCbacBanner-Dbe55bim.js";import"./makeExternalStore-CSjj7q-A.js";import"./Tooltip-Cpc6auoa.js";import"./PopoverPopup-lHWxOezE.js";import"./debounce-BQlWP471.js";import"./useOsdkClient-DPYsXDsF.js";import"./tick-DHfOLs3o.js";import"./DropdownField-B7Jif8UN.js";import"./isEqual-DMMPSwJg.js";import"./withOsdkMetrics-BKDPrjKN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
