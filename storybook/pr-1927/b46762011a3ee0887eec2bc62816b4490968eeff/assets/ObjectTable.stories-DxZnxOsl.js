import{j as i}from"./iframe-BOYw5zy-.js";import{O as p}from"./object-table-D81tTWvf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Z1ify2_P.js";import"./preload-helper-rlM1gbkG.js";import"./Table-DL2T0EZB.js";import"./index-BiLXe7b8.js";import"./Dialog-DIZILVPE.js";import"./cross-CsFY0Vd9.js";import"./svgIconContainer-DR1S8Glm.js";import"./useBaseUiId-BaQZ9H47.js";import"./InternalBackdrop-jHkma8F_.js";import"./composite-B4RYJvOx.js";import"./index-DJ2EryKw.js";import"./index-0lKohxv1.js";import"./index-iucmux4F.js";import"./useEventCallback-2k-8oajA.js";import"./SkeletonBar-CGMO35AQ.js";import"./LoadingCell-CmuJvP6e.js";import"./ColumnConfigDialog-BS8J0jq7.js";import"./DraggableList-DvXNu-Bu.js";import"./search-BTWV523N.js";import"./Input-D2kKGhXI.js";import"./useControlled-jWAlfo7U.js";import"./Button-WZTUEUss.js";import"./small-cross-Bl3dZfTj.js";import"./ActionButton-BqxdywPW.js";import"./Checkbox-CqZpR2LE.js";import"./useValueChanged-DibL0JTX.js";import"./CollapsiblePanel-C3WjnvDq.js";import"./MultiColumnSortDialog-BHScrzXj.js";import"./MenuTrigger-DTKkTg9R.js";import"./CompositeItem-CFBGvBu5.js";import"./ToolbarRootContext-po-fYSto.js";import"./getDisabledMountTransitionStyles-BgyDuN12.js";import"./getPseudoElementBounds-lvyQN2rY.js";import"./chevron-down-D_OtGuxk.js";import"./index-BKNNKL9I.js";import"./error-1JPgoJzQ.js";import"./BaseCbacBanner-CkMD_K2_.js";import"./makeExternalStore-BH853qpO.js";import"./Tooltip-D-uoAdky.js";import"./PopoverPopup-DO5EffCW.js";import"./debounce-DDF3v6y6.js";import"./useOsdkClient-r4YoKJoo.js";import"./tick-DAhMGnUy.js";import"./DropdownField-cmZfnDUJ.js";import"./isEqual-CU0W-K1Y.js";import"./withOsdkMetrics-BaHbUuYM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
