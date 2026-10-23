import{j as i}from"./iframe-BRcpmwFv.js";import{O as p}from"./object-table-DZ0d4DEr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DcmSrFqo.js";import"./preload-helper-B5eDbs3J.js";import"./Table-Dx5TKSH0.js";import"./index-DK3oZ2G7.js";import"./Dialog-B2N7jv5R.js";import"./cross-C_YRX_a7.js";import"./svgIconContainer-BHIG5g_O.js";import"./useBaseUiId-BZpEg0W8.js";import"./InternalBackdrop-Bi_i6Gge.js";import"./composite-BLjliQ-J.js";import"./index-Droxy6Rm.js";import"./index-BnsjDL9p.js";import"./index-BlWG8r-Q.js";import"./useEventCallback-f3FFz_4C.js";import"./SkeletonBar-CwZnLaIO.js";import"./LoadingCell-OPmY-b4P.js";import"./ColumnConfigDialog-CrEC7igt.js";import"./DraggableList-DNhYzVQv.js";import"./search-DB_eRkJ7.js";import"./Input-DcIPWMXq.js";import"./useControlled-DbOKjk83.js";import"./Button-D8AxOjNK.js";import"./small-cross-DBM2r0BS.js";import"./ActionButton-BnrjjFOh.js";import"./Checkbox-gzFktAj8.js";import"./useValueChanged-DKSrxV4L.js";import"./CollapsiblePanel-BYDCF-xy.js";import"./MultiColumnSortDialog-CdwriShv.js";import"./MenuTrigger-v7hsXSxC.js";import"./CompositeItem-BjOjS-vj.js";import"./ToolbarRootContext-JjbSW9e7.js";import"./getDisabledMountTransitionStyles-D1N43ayV.js";import"./getPseudoElementBounds-C96XcGvW.js";import"./chevron-down-l6tBIHM5.js";import"./index-DqbNsSYI.js";import"./error-b3Z30HbN.js";import"./BaseCbacBanner-BhR8r3av.js";import"./makeExternalStore-CZ91arQK.js";import"./Tooltip-ZcVO_NEa.js";import"./PopoverPopup-Dh05gS4y.js";import"./debounce-DDQyBRU1.js";import"./useOsdkClient-BUSM7w3V.js";import"./tick-DxXZI3bo.js";import"./DropdownField-66rMfkM0.js";import"./isEqual-B89pKhWY.js";import"./withOsdkMetrics-Dwn_FNSW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
