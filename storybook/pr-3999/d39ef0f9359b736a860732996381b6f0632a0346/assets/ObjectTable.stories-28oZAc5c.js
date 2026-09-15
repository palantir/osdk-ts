import{j as i}from"./iframe-BcMMFnf6.js";import{O as p}from"./object-table-CxXVxX03.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7_gCP6A.js";import"./preload-helper-Bdi1tYmS.js";import"./Table-CVhdvPJG.js";import"./index-BMHtYDol.js";import"./Dialog-Bbv7wRiS.js";import"./cross-6YkLE3rk.js";import"./svgIconContainer-C05amAGf.js";import"./useBaseUiId-Dh5_vj5x.js";import"./InternalBackdrop-CFb38Fo8.js";import"./composite-B2X0dip5.js";import"./index-BnYXDYMU.js";import"./index-CPLAyU55.js";import"./index-CXDE3lu9.js";import"./useEventCallback-B-CAuCE6.js";import"./SkeletonBar-CwdmwRXI.js";import"./LoadingCell-Cyb6lws2.js";import"./ColumnConfigDialog-DPyT_nAD.js";import"./DraggableList-BUUnKG2Z.js";import"./search-2DDBXVlF.js";import"./Input-BrlK9Tqs.js";import"./useControlled-DFUxWacU.js";import"./Button-DEYF-M81.js";import"./small-cross-enohh6ER.js";import"./ActionButton-9uXzTSfY.js";import"./Checkbox-DTojGO_u.js";import"./useValueChanged-CFpnpCX0.js";import"./CollapsiblePanel-OHw4Wyuf.js";import"./MultiColumnSortDialog-DDvUa2YG.js";import"./MenuTrigger-DiZnaGKK.js";import"./CompositeItem-t1YG6a8m.js";import"./ToolbarRootContext-BPQo0iii.js";import"./getDisabledMountTransitionStyles-BDC06-FA.js";import"./getPseudoElementBounds-DxN6LO-t.js";import"./chevron-down-Co1TC95K.js";import"./index-BjuvBbw0.js";import"./error-DAhNXKes.js";import"./BaseCbacBanner-C2pCyY83.js";import"./makeExternalStore-DdbizQyP.js";import"./Tooltip-DTTbLAmt.js";import"./PopoverPopup-CokHJSIa.js";import"./debounce-BMh6x8y-.js";import"./useOsdkClient-CfZDOufs.js";import"./tick-D5j9FNYd.js";import"./DropdownField-CM1t1x7G.js";import"./isEqual-Cn-TZ48h.js";import"./withOsdkMetrics-BH4rg4j0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
