import{j as i}from"./iframe-BBbz1AL9.js";import{O as p}from"./object-table-CnZxylfN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DhgFr9rU.js";import"./preload-helper-LktJP5uP.js";import"./Table-BEK0Bl35.js";import"./index-BOgOZGVm.js";import"./Dialog-Bka1mwMg.js";import"./cross-D2ow8c2-.js";import"./svgIconContainer-DFesH5dO.js";import"./useBaseUiId-D4UJyJ9J.js";import"./InternalBackdrop-CJ0Y8Kog.js";import"./composite-MiODqQmu.js";import"./index-CA8g9ho5.js";import"./index-Db4moevd.js";import"./index-D3NdQmE7.js";import"./useEventCallback-H5LWbmVP.js";import"./SkeletonBar-EV7-VIf-.js";import"./LoadingCell-Bs3kbv_6.js";import"./ColumnConfigDialog-udmBc1UO.js";import"./DraggableList-DOKJgB3l.js";import"./search-DnvQFbf5.js";import"./Input-DMWAeir1.js";import"./useControlled-BAncaeLN.js";import"./Button-DI71fvab.js";import"./small-cross-JgZQe-XJ.js";import"./ActionButton-eGdQnCQC.js";import"./Checkbox-Cw_WX90u.js";import"./useValueChanged-CwyCbx99.js";import"./CollapsiblePanel-Dr5UHTv0.js";import"./MultiColumnSortDialog-CSl4ZM_a.js";import"./MenuTrigger-Bycf4s8k.js";import"./CompositeItem-DV0DAQDv.js";import"./ToolbarRootContext-CDIUf1p8.js";import"./getDisabledMountTransitionStyles-Md2PJyBx.js";import"./getPseudoElementBounds-OF4rLga5.js";import"./chevron-down-DxqKQR7L.js";import"./index-DXllweDc.js";import"./error-BG3KjKN_.js";import"./BaseCbacBanner-bnHVqfrz.js";import"./makeExternalStore-D3rO5u3I.js";import"./Tooltip-VoV22dJs.js";import"./PopoverPopup-dMiMS_iS.js";import"./debounce-BrRPn5q2.js";import"./useOsdkClient-CWYpxt6E.js";import"./tick-DzipYJGn.js";import"./DropdownField-ye8n36Ni.js";import"./isEqual-DUuKJX2r.js";import"./withOsdkMetrics-tTo2SGpZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
