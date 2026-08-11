import{j as i}from"./iframe-CCC2PHCs.js";import{O as p}from"./object-table-JyeIF4Ik.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CP5qOFkT.js";import"./preload-helper-BFAjaxlT.js";import"./Table-Tr8T08f6.js";import"./index-CsHmWOuW.js";import"./Dialog-Cnh66PvR.js";import"./cross-lgZ_UxXM.js";import"./svgIconContainer-Ba3v3a21.js";import"./useBaseUiId-BFMlM2-S.js";import"./InternalBackdrop-BnM8GG-f.js";import"./composite-BG85D_QD.js";import"./index-BoDdy69P.js";import"./index-64uZX6qw.js";import"./index--yeukdQS.js";import"./useEventCallback-BPpFzH48.js";import"./SkeletonBar-DpWsGDn2.js";import"./LoadingCell-0OdFVmmS.js";import"./ColumnConfigDialog-cmbAROZc.js";import"./DraggableList-BR4LQP_Y.js";import"./search-BST7YF_6.js";import"./Input-DjnHunMe.js";import"./useControlled-DAuImFbI.js";import"./isEqual-KfrDcXUe.js";import"./isObject-CT2uOlZF.js";import"./Button-FRBaRdpx.js";import"./ActionButton-CU0LKqPe.js";import"./Checkbox-GukqDrdT.js";import"./useValueChanged-Be1ntney.js";import"./CollapsiblePanel-6KxruyI2.js";import"./MultiColumnSortDialog-Bhpeg0xl.js";import"./MenuTrigger-BTHi8q0m.js";import"./CompositeItem-D0KbA8wb.js";import"./ToolbarRootContext-BEIRwfim.js";import"./getDisabledMountTransitionStyles-2GwNpLXP.js";import"./getPseudoElementBounds-DyzJnhBQ.js";import"./chevron-down-DUX5MQ0Z.js";import"./index-2S7gRbbX.js";import"./error-DJg-nO-Y.js";import"./BaseCbacBanner-B8w_F0WY.js";import"./makeExternalStore-BFrjPQ7J.js";import"./Tooltip-By9jF44Z.js";import"./PopoverPopup-Dl_tuOw1.js";import"./toNumber-J0EmJ7U_.js";import"./useOsdkClient-k0xy2KcY.js";import"./tick-CY5jNQkl.js";import"./DropdownField-B1uqj5XJ.js";import"./withOsdkMetrics-sn1hY-b7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
