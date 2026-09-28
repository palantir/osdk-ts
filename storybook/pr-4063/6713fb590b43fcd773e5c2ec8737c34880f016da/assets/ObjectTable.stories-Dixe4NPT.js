import{j as i}from"./iframe-CGwmlW2r.js";import{O as p}from"./object-table-BdiaLjP_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C7R1BQ_B.js";import"./preload-helper-CVIGiO6F.js";import"./Table-CqdlxWqq.js";import"./index-CjgswMxd.js";import"./Dialog-DOOox7qs.js";import"./cross-DQgNlB5k.js";import"./svgIconContainer-BTPb8DLH.js";import"./useBaseUiId-Bm2cFh6B.js";import"./InternalBackdrop-B-ry2Uvu.js";import"./composite-BJmQcV2t.js";import"./index-DxRKQXJQ.js";import"./index-CafwHe0h.js";import"./index-CgjmDikR.js";import"./useEventCallback-BiRgUSbg.js";import"./SkeletonBar-BMy2XXrH.js";import"./LoadingCell-BUTVej-9.js";import"./ColumnConfigDialog-Ch004eyC.js";import"./DraggableList-BAjeUcaG.js";import"./search-DcxUYSzD.js";import"./Input-pi6zEsGe.js";import"./useControlled-DsP0nmCG.js";import"./Button-DFUwv3AU.js";import"./small-cross-Dlo2xc3T.js";import"./ActionButton-Cqfuw1XW.js";import"./Checkbox-BRlEJGBQ.js";import"./useValueChanged-Bttiqhne.js";import"./CollapsiblePanel-Dbr7GgxQ.js";import"./MultiColumnSortDialog-C_hr8XYu.js";import"./MenuTrigger-CJM2cb2l.js";import"./CompositeItem-7T1omaB9.js";import"./ToolbarRootContext-CxtjwMoV.js";import"./getDisabledMountTransitionStyles-Do49NmND.js";import"./getPseudoElementBounds-DDUtEhAw.js";import"./chevron-down-CfoUsUUp.js";import"./index-Z2JS55l6.js";import"./error-CgUQsRwJ.js";import"./BaseCbacBanner-Cdi8VTcB.js";import"./makeExternalStore-B5u8APGM.js";import"./Tooltip-D5ZU9d0s.js";import"./PopoverPopup-ByMkl8rO.js";import"./debounce-ZyuHSE7w.js";import"./useOsdkClient-Be2ZREGr.js";import"./tick-DaMMKKEV.js";import"./DropdownField-B4moQZxn.js";import"./isEqual-CjASy58h.js";import"./withOsdkMetrics-DDzV_xju.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
