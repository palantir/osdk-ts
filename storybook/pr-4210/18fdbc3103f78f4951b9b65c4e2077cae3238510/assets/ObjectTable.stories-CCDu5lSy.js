import{j as i}from"./iframe-BqwIL6HW.js";import{O as p}from"./object-table-DMbi1Pvy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D06RQXMH.js";import"./preload-helper-C2aBQR0i.js";import"./Table-bpA5xtcE.js";import"./index-Cae-eAYf.js";import"./Dialog-DuCy0N3k.js";import"./cross-BT2F3WaS.js";import"./svgIconContainer-COFarK7B.js";import"./useBaseUiId-BrjtMHRo.js";import"./InternalBackdrop-CgHzff8o.js";import"./composite-ByfMjDoy.js";import"./index-B_ClGvof.js";import"./index-D80ub2hK.js";import"./index-CNDTMQ3q.js";import"./useEventCallback-DCC9o1g_.js";import"./SkeletonBar-Cjqtl2vi.js";import"./LoadingCell-q9zY1XLH.js";import"./ColumnConfigDialog-GrepuD1S.js";import"./DraggableList-aOzgfBps.js";import"./search-B46OZpsx.js";import"./Input-5dPcAYXy.js";import"./useControlled-Cn8olvRX.js";import"./Button-DY9YVtH3.js";import"./small-cross-CrN3j_m1.js";import"./ActionButton-D68kU6Ew.js";import"./Checkbox-OHzaDy7X.js";import"./useValueChanged-CQ0JMvBl.js";import"./CollapsiblePanel-C-zhrpZe.js";import"./MultiColumnSortDialog-J1D7KJHQ.js";import"./MenuTrigger-B6yCrZ6W.js";import"./CompositeItem-CbgN92a5.js";import"./ToolbarRootContext-DUNP2109.js";import"./getDisabledMountTransitionStyles-Og5LYC2n.js";import"./getPseudoElementBounds-BNlxAt2r.js";import"./chevron-down-S5K5GEQg.js";import"./index-BkbUCulf.js";import"./error-rHIfSgQZ.js";import"./BaseCbacBanner-CTgoipjB.js";import"./makeExternalStore-CWQKdOgP.js";import"./Tooltip-BHtmGDUn.js";import"./PopoverPopup-Mlz_yO9l.js";import"./debounce-CjNb2h4-.js";import"./useOsdkClient-D1PnuLrI.js";import"./tick-gHUj1QgS.js";import"./DropdownField-DPc-zral.js";import"./isEqual-qyY3U0dF.js";import"./withOsdkMetrics-BCVV0LnC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
