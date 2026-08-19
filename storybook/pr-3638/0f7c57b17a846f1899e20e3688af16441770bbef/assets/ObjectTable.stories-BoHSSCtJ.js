import{j as i}from"./iframe-CCxrc5uu.js";import{O as p}from"./object-table-DI19Dn93.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWr-k5Js.js";import"./preload-helper-D9q9R3OD.js";import"./Table-DuVW994G.js";import"./index-qDidCFPc.js";import"./Dialog-C1rBLM2C.js";import"./cross-BmJWQ0-J.js";import"./svgIconContainer-CkLZQvG4.js";import"./useBaseUiId-BGcK0dYJ.js";import"./InternalBackdrop-BUKfKa7j.js";import"./composite-BPcLlFHy.js";import"./index-XpQZglWM.js";import"./index-DgxjKFwf.js";import"./index-uaSS-Si1.js";import"./useEventCallback-Ca7G1v-t.js";import"./SkeletonBar-CkGNgeFP.js";import"./LoadingCell-BW3EJQ88.js";import"./ColumnConfigDialog-BKcwryLe.js";import"./DraggableList-2wkOenVS.js";import"./search-jlcS54Ws.js";import"./Input-D9VrK1lm.js";import"./useControlled-zCfwXGMX.js";import"./Button-BxUO2cyH.js";import"./small-cross-DApQCxhT.js";import"./ActionButton-uMqfk8wS.js";import"./Checkbox-sIgy0-j4.js";import"./useValueChanged-Ba8hJIzP.js";import"./CollapsiblePanel-DTBD66wd.js";import"./MultiColumnSortDialog-B5Q9y3_f.js";import"./MenuTrigger-XXFcNZty.js";import"./CompositeItem-D76iKrer.js";import"./ToolbarRootContext-BnL2264j.js";import"./getDisabledMountTransitionStyles-Cmze2BdL.js";import"./getPseudoElementBounds-CvKBTt7E.js";import"./chevron-down-uBVJdRCo.js";import"./index-C_rJszoR.js";import"./error-ecSZs2U2.js";import"./BaseCbacBanner-CLEl47kq.js";import"./makeExternalStore-B_4U4xcV.js";import"./Tooltip-GkxQYuKb.js";import"./PopoverPopup-anKkxbKl.js";import"./debounce-Q7kSSS8k.js";import"./useOsdkClient-CdQYDJKp.js";import"./tick-DZ9D5jnu.js";import"./DropdownField-ei5pUXuj.js";import"./isEqual-KlKetUCi.js";import"./withOsdkMetrics-jldHoxNz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
