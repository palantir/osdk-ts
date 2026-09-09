import{j as i}from"./iframe-D07_tlNY.js";import{O as p}from"./object-table-mDZNy2eA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCiePWM-.js";import"./preload-helper-BZ5VSi4J.js";import"./Table-DhmSo6kc.js";import"./index-BQ0PEMCN.js";import"./Dialog-zKwf6kcN.js";import"./cross-cfoeTeHb.js";import"./svgIconContainer-BLgeYPC8.js";import"./useBaseUiId-B0wQwkXS.js";import"./InternalBackdrop-B6N_TrYF.js";import"./composite-gwuj_Yg_.js";import"./index-EmEIjE8b.js";import"./index-Dy14VnsS.js";import"./index-Djr2tU3g.js";import"./useEventCallback-CacU8cTK.js";import"./SkeletonBar-Y8JMEaWt.js";import"./LoadingCell-Eyo1i6r7.js";import"./ColumnConfigDialog-CLjvnD13.js";import"./DraggableList-HRQfyvgY.js";import"./search-c3tWQKm6.js";import"./Input-C_nbkkcq.js";import"./useControlled-BOVJlk7U.js";import"./Button-xkyJItTT.js";import"./small-cross-ByB9N4b6.js";import"./ActionButton-C1-Qn1rI.js";import"./Checkbox-Cu6eiH4X.js";import"./useValueChanged-DGjiOWT_.js";import"./CollapsiblePanel-WfZDl8Bs.js";import"./MultiColumnSortDialog-CR7MeaoO.js";import"./MenuTrigger-DSHQ860W.js";import"./CompositeItem-B62DALdv.js";import"./ToolbarRootContext-A8nSy6Lb.js";import"./getDisabledMountTransitionStyles-BiaitSmC.js";import"./getPseudoElementBounds-De8tJeym.js";import"./chevron-down-Dm8M3XHE.js";import"./index-B2TS2X4n.js";import"./error-D7fddi8p.js";import"./BaseCbacBanner-C7-RK-oc.js";import"./makeExternalStore-DW0gV4Fp.js";import"./Tooltip-D43kVT1Z.js";import"./PopoverPopup-BogJF-KW.js";import"./debounce--cq45Syc.js";import"./useOsdkClient-Dp-gfOqY.js";import"./tick-D3lvgpVt.js";import"./DropdownField-Xg10lVkk.js";import"./isEqual-BPrEtiGy.js";import"./withOsdkMetrics-CK10C4kZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
