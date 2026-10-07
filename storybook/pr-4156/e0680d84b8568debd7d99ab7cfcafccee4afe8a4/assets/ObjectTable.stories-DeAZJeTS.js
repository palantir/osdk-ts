import{j as i}from"./iframe-CvX9Pygi.js";import{O as p}from"./object-table-BUtrTjpN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BVZQZEB6.js";import"./preload-helper-BB8WBYsV.js";import"./Table-QxYBnfC2.js";import"./index-BZTqeQuD.js";import"./Dialog-Cwq31CHt.js";import"./cross-a0pxU8ye.js";import"./svgIconContainer-Cik9z__5.js";import"./useBaseUiId-BW2Ufhyw.js";import"./InternalBackdrop-KsToEN62.js";import"./composite-B1Ef3_vs.js";import"./index-C3D6pCjL.js";import"./index-EBKlSRA8.js";import"./index-BRzHUjU3.js";import"./useEventCallback-Cd4IUoh5.js";import"./SkeletonBar-Bnfzc4A1.js";import"./LoadingCell-EkqPT1cA.js";import"./ColumnConfigDialog-C2V8ttfd.js";import"./DraggableList-OvqbjDr_.js";import"./search-D9_8mB8g.js";import"./Input-B4YDDaMi.js";import"./useControlled-qJqObmnH.js";import"./Button-D5Y-liWD.js";import"./small-cross-BfYBNzN7.js";import"./ActionButton-BG0rIOTw.js";import"./Checkbox-B_3kZLWz.js";import"./useValueChanged-CN40AKPX.js";import"./CollapsiblePanel-DiQ0neqE.js";import"./MultiColumnSortDialog-khzDAYAw.js";import"./MenuTrigger-D9EQbsZv.js";import"./CompositeItem-LESBwLaD.js";import"./ToolbarRootContext-BT80oNNA.js";import"./getDisabledMountTransitionStyles-Oyv5nHgL.js";import"./getPseudoElementBounds-vWAS2NT6.js";import"./chevron-down-o9sdxfCV.js";import"./index-w6IpT_oR.js";import"./error-B2uabQYe.js";import"./BaseCbacBanner-BxOuxwtm.js";import"./makeExternalStore-M2yjAWof.js";import"./Tooltip-Bd17w1nK.js";import"./PopoverPopup-CFZCCanB.js";import"./debounce-BfCJX0Ug.js";import"./useOsdkClient-BkDk9PCS.js";import"./tick-Cu_c34Lw.js";import"./DropdownField-5zyXtgzR.js";import"./isEqual-CY1gbDwB.js";import"./withOsdkMetrics-DTO1kugV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
