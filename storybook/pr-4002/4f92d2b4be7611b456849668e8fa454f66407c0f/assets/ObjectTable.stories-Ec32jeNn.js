import{j as i}from"./iframe-ooeZhevd.js";import{O as p}from"./object-table-BNZpf3v7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-70_b9Xei.js";import"./preload-helper-BnwSBXhQ.js";import"./Table-BMiiJ1dv.js";import"./index-Opepl_3W.js";import"./Dialog-whPx79dt.js";import"./cross-iJZIJRn7.js";import"./svgIconContainer-ibzsHUTw.js";import"./useBaseUiId-C4sL4iAi.js";import"./InternalBackdrop-x2qoBta4.js";import"./composite-DKgZ9LEy.js";import"./index-CYHbLiIc.js";import"./index-BCos5_Jn.js";import"./index-B9EyyIgd.js";import"./useEventCallback-EkipuQOe.js";import"./SkeletonBar-BEN-vvtf.js";import"./LoadingCell-BLOrCGFf.js";import"./ColumnConfigDialog-Bz6SjtKR.js";import"./DraggableList-DnSrmqMp.js";import"./search-DiIwZt1O.js";import"./Input-ChnU8vn2.js";import"./useControlled-Gm0PZX0G.js";import"./Button-DqC8xzBf.js";import"./small-cross-BLYu_41q.js";import"./ActionButton-W94KnoF6.js";import"./Checkbox-CNgD2rt5.js";import"./useValueChanged-DdWwkIMT.js";import"./CollapsiblePanel-Dp0b_V1p.js";import"./MultiColumnSortDialog-CzlwmuQV.js";import"./MenuTrigger-2FtXkbkY.js";import"./CompositeItem-CeghUTrN.js";import"./ToolbarRootContext-DJcBXYiU.js";import"./getDisabledMountTransitionStyles-BzrJdGmZ.js";import"./getPseudoElementBounds-DWlgx5fm.js";import"./chevron-down-BdjihE2B.js";import"./index-BYF2kMrC.js";import"./error-Cy4V0hs4.js";import"./BaseCbacBanner-CBMCJm_T.js";import"./makeExternalStore-BQ6V8XYd.js";import"./Tooltip-CXPB0dJ-.js";import"./PopoverPopup-BxQimM2r.js";import"./debounce-Bz4zrZ7K.js";import"./useOsdkClient-niwjXdb6.js";import"./tick-BBpzHv2k.js";import"./DropdownField-w_-x_8X7.js";import"./isEqual-Cr1Ti8md.js";import"./withOsdkMetrics-BKB5x-AQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
