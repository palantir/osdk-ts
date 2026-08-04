import{j as i}from"./iframe-6hQ2fc3n.js";import{O as p}from"./object-table-BXVuEG0G.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BmLIKrfz.js";import"./preload-helper-bQV8UHWE.js";import"./Table-DClTy0WR.js";import"./index-B1djcyHP.js";import"./Dialog-CknjkbMC.js";import"./cross-ccjJBWTc.js";import"./svgIconContainer-Clfe7Lwj.js";import"./useBaseUiId-C9747yUz.js";import"./InternalBackdrop-CpYIKNpL.js";import"./composite-CFvNHCkP.js";import"./index-jX9mz87a.js";import"./index-K-Op5Vv5.js";import"./index-bkfQr57D.js";import"./useEventCallback-gCPFH5QV.js";import"./SkeletonBar-DnyiV29j.js";import"./LoadingCell-MA9hl1i0.js";import"./ColumnConfigDialog-BkL5BPXj.js";import"./DraggableList-DETFlm4X.js";import"./search-BuQM9KwU.js";import"./Input-BNMmRwH0.js";import"./useControlled-u3EMkLFh.js";import"./isEqual-DdWPSUaU.js";import"./isObject-CirLIJW7.js";import"./Button-VUEdQ68Q.js";import"./ActionButton-azoptpfb.js";import"./Checkbox-Ca3PYpeb.js";import"./useValueChanged-BBF2PhG7.js";import"./CollapsiblePanel-CT90hPsj.js";import"./MultiColumnSortDialog-BUqO-KoJ.js";import"./MenuTrigger-BJJvjvwi.js";import"./CompositeItem-B8ehrMS9.js";import"./ToolbarRootContext-DIDb7FlQ.js";import"./getDisabledMountTransitionStyles-Da9PJqiY.js";import"./getPseudoElementBounds-B10_-yXQ.js";import"./chevron-down-CJa2nLIB.js";import"./index-BP_HdQ9P.js";import"./error-2bwv59jW.js";import"./BaseCbacBanner-ibkm49XL.js";import"./makeExternalStore-DyCpkktA.js";import"./Tooltip-d54S_j8-.js";import"./PopoverPopup-DUz9RoFe.js";import"./toNumber-BAElQw_D.js";import"./useOsdkClient-D-d--rTZ.js";import"./tick-BJM8MNhK.js";import"./DropdownField-DANYs0wh.js";import"./withOsdkMetrics-BkqPVDva.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
