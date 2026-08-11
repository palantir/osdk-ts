import{j as i}from"./iframe-COjTwACd.js";import{O as p}from"./object-table-ad3I6vNt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cmt-nGY1.js";import"./preload-helper-3zoUuQg3.js";import"./Table-DzY3O7qR.js";import"./index-BYBN_pM5.js";import"./Dialog-enusm8Xl.js";import"./cross-hWU4qN2Y.js";import"./svgIconContainer-DB8O-WH_.js";import"./useBaseUiId-BHJRkAYu.js";import"./InternalBackdrop-C8gZnl-V.js";import"./composite-Dw_TPpFp.js";import"./index-Cggo2yFx.js";import"./index-DpYQBSKi.js";import"./index-CRX31u9Z.js";import"./useEventCallback-CfXfPHvG.js";import"./SkeletonBar-gcXj0eg1.js";import"./LoadingCell-BwbzNNbx.js";import"./ColumnConfigDialog-C-TJFZJf.js";import"./DraggableList-DjLi1ogf.js";import"./search-DODDfQXo.js";import"./Input-BDTIJBOH.js";import"./useControlled-Dm0Jzoa7.js";import"./isEqual-0odBgQKO.js";import"./isObject-qUmzueCJ.js";import"./Button-DKrxgkIM.js";import"./ActionButton-Cn4l8VKx.js";import"./Checkbox-kb0Y2AkR.js";import"./useValueChanged-DImedWVh.js";import"./CollapsiblePanel-Bq6cIAYo.js";import"./MultiColumnSortDialog-dr38wXKF.js";import"./MenuTrigger-3iGgKsct.js";import"./CompositeItem-BMvAHYYR.js";import"./ToolbarRootContext-BS68jFk4.js";import"./getDisabledMountTransitionStyles-Bg0FVveg.js";import"./getPseudoElementBounds-BvZhrghV.js";import"./chevron-down-39gHaxC5.js";import"./index-Bt5nnrw-.js";import"./error-CY-30sSF.js";import"./BaseCbacBanner-ak4NXG6S.js";import"./makeExternalStore-DW8okzVM.js";import"./Tooltip-CFj_9NEW.js";import"./PopoverPopup-vk-66Q-a.js";import"./toNumber-BsyqgQYw.js";import"./useOsdkClient-B8zsgjem.js";import"./tick-GyyYcMwP.js";import"./DropdownField-DnjYW3ti.js";import"./withOsdkMetrics-BuKYfzIS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
