import{j as i}from"./iframe-DMEeR_A6.js";import{O as p}from"./object-table-DpPdg6rC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DF9_ob2s.js";import"./preload-helper-CSwxJ2Qu.js";import"./Table-BVtLGRs-.js";import"./index-BqSwH6BS.js";import"./Dialog-Bmg5t_Rv.js";import"./cross-D1DQ-gsn.js";import"./svgIconContainer-BjNsgw11.js";import"./useBaseUiId-C_keuJD_.js";import"./InternalBackdrop-Du4XsI-F.js";import"./composite-c9YX8hZx.js";import"./index-DfbVa9Ua.js";import"./index-BNsZDNUv.js";import"./index-D8V__r46.js";import"./useEventCallback-jLitOrjn.js";import"./SkeletonBar-fcVlNLZ8.js";import"./LoadingCell-Cz--n1SX.js";import"./ColumnConfigDialog-Cx9qj5Wo.js";import"./DraggableList-CYLi03tu.js";import"./search-C4awjolY.js";import"./Input-DNu0XTv_.js";import"./useControlled-JgK447yP.js";import"./isEqual-C5BtzEHg.js";import"./isObject-BwRGfctU.js";import"./Button-D8YP-W_J.js";import"./ActionButton-DBLagc9K.js";import"./Checkbox-BbDJ4RQ9.js";import"./useValueChanged-Snwakmnu.js";import"./CollapsiblePanel-k2iQjFFp.js";import"./MultiColumnSortDialog-Yn5zCMWH.js";import"./MenuTrigger-B1D8mTKr.js";import"./CompositeItem-BjD7sfVu.js";import"./ToolbarRootContext-DUcwU7Eq.js";import"./getDisabledMountTransitionStyles-CbEoBQbW.js";import"./getPseudoElementBounds-CSLBYaMJ.js";import"./chevron-down-CQJ4c2jJ.js";import"./index-BDKCNXPL.js";import"./error-B_Co1YFo.js";import"./BaseCbacBanner-BxYeTs4u.js";import"./makeExternalStore-lRhVC4OU.js";import"./Tooltip-CbgggMzF.js";import"./PopoverPopup-DprMQeHB.js";import"./debounce-D3f1Scy_.js";import"./useOsdkClient-CGfWHfWZ.js";import"./tick-BROod1D6.js";import"./DropdownField-CGgIhePw.js";import"./withOsdkMetrics-CPkWaZWg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
