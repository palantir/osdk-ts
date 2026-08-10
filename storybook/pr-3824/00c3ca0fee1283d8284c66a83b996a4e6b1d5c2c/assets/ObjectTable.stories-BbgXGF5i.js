import{j as i}from"./iframe-BBtjza0D.js";import{O as p}from"./object-table-VAgW1ltd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7wGD0_JW.js";import"./preload-helper-DIpLrdyg.js";import"./Table-BEnfOoEp.js";import"./index-B5Ib5NgX.js";import"./Dialog-CCUdZMbo.js";import"./cross-BAgiJhuh.js";import"./svgIconContainer-Cv3Whexl.js";import"./useBaseUiId-HwKRTBOZ.js";import"./InternalBackdrop-BBv82JT6.js";import"./composite-BoMOOGfe.js";import"./index-CzUdZzH9.js";import"./index-z3NWRD_P.js";import"./index-DY4mmY1u.js";import"./useEventCallback-C-6kmm7l.js";import"./SkeletonBar-DDTcX3hN.js";import"./LoadingCell-7hlIoA0q.js";import"./ColumnConfigDialog-BaW5HGmi.js";import"./DraggableList-GBg65Pa-.js";import"./search-DOUHr1do.js";import"./Input-CLtZs9ea.js";import"./useControlled-n1nITqfY.js";import"./isEqual-DRbQ_qQ8.js";import"./isObject-CRoSQNk8.js";import"./Button-DGjGmxxw.js";import"./ActionButton-dU6sc1YN.js";import"./Checkbox-BvRdeDWJ.js";import"./useValueChanged-B2tPWHcI.js";import"./CollapsiblePanel-BRYkOrMA.js";import"./MultiColumnSortDialog-82xGBFJG.js";import"./MenuTrigger-BalqVSgk.js";import"./CompositeItem-CDPE0MsY.js";import"./ToolbarRootContext-DZE0giUi.js";import"./getDisabledMountTransitionStyles-HfVWLkeP.js";import"./getPseudoElementBounds-DTnaAh_r.js";import"./chevron-down-BM8P94BW.js";import"./index-3zRTNHrM.js";import"./error-WTxwKOKI.js";import"./BaseCbacBanner-DdowyWAq.js";import"./makeExternalStore-DRwq3rQb.js";import"./Tooltip-D56y5GIx.js";import"./PopoverPopup-BqYcoYkA.js";import"./toNumber-DC-nmIwK.js";import"./useOsdkClient-DWO6jtgp.js";import"./tick-jgZPqcGy.js";import"./DropdownField-NYNeufQb.js";import"./withOsdkMetrics-CouVRm-f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
