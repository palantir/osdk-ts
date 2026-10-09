import{j as i}from"./iframe-DIQwlBGw.js";import{O as p}from"./object-table-B0kYPHpZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DjO-0UMb.js";import"./preload-helper-DCZh2qZU.js";import"./Table-BPo3rkv8.js";import"./index-BMg1YwPI.js";import"./Dialog-CLjd9I5R.js";import"./cross-D0qgRA8s.js";import"./svgIconContainer-nWXxjIgM.js";import"./useBaseUiId-mRekfqkE.js";import"./InternalBackdrop-C6DbQw29.js";import"./composite-B2M76Ume.js";import"./index-DtMGyB9I.js";import"./index-BuSKlV2e.js";import"./index-UQtK-RIQ.js";import"./useEventCallback-DxY1G1xy.js";import"./SkeletonBar-DVtZv4Je.js";import"./LoadingCell-Dqa7QJ7Z.js";import"./ColumnConfigDialog-BiMopCab.js";import"./DraggableList-9SOspmbc.js";import"./search-Tzmhdcy6.js";import"./Input-BemJFGwg.js";import"./useControlled-CIA12Xby.js";import"./Button-VL7ULnuX.js";import"./small-cross-D_-B7wlF.js";import"./ActionButton-xUfD7fn9.js";import"./Checkbox-BI1kwAKI.js";import"./useValueChanged-CKkyYd23.js";import"./CollapsiblePanel-BXhFX321.js";import"./MultiColumnSortDialog-ByVpX3ed.js";import"./MenuTrigger-B3Zw-U0E.js";import"./CompositeItem-D6nOF9ZG.js";import"./ToolbarRootContext-D5pzp3U-.js";import"./getDisabledMountTransitionStyles-CVqdgNzh.js";import"./getPseudoElementBounds-BT2tDun_.js";import"./chevron-down-Be7rb41D.js";import"./index-DjZsV1fi.js";import"./error-Bhb1P9AB.js";import"./BaseCbacBanner-D7HQfyCk.js";import"./makeExternalStore-C-tnPbL7.js";import"./Tooltip-DwcbeITg.js";import"./PopoverPopup-BXkqjOaY.js";import"./debounce-jcF6p9SO.js";import"./useOsdkClient-DggWHq9a.js";import"./tick-sIrdoQr_.js";import"./DropdownField-33Sq78Ta.js";import"./isEqual-CTj4d5Eb.js";import"./withOsdkMetrics-CrDHFYla.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
