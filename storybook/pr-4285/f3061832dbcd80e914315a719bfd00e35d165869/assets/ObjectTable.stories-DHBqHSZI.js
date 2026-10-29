import{j as i}from"./iframe-97p3M09u.js";import{O as p}from"./object-table-D01AYNwF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-qsr3hS9e.js";import"./preload-helper-CxVBxFAW.js";import"./Table-_uA8jK5o.js";import"./index-DVPCIdd3.js";import"./Dialog-beHxH1X-.js";import"./cross-CaR0F6Vj.js";import"./svgIconContainer-BmP4bwRX.js";import"./useBaseUiId-DuQvLNdl.js";import"./InternalBackdrop-DgKNXgWX.js";import"./composite-B7fVO-VQ.js";import"./index-mZLyQtJX.js";import"./index-DxXJGm8P.js";import"./index-WmjPk0xi.js";import"./useEventCallback-DsROmeik.js";import"./SkeletonBar-scZGsopT.js";import"./LoadingCell-BNaB6DR_.js";import"./ColumnConfigDialog-YnquIy3P.js";import"./DraggableList-BrDMHZmf.js";import"./search-C9oUUQa_.js";import"./Input-CM6A8_jN.js";import"./useControlled-BVQhU86y.js";import"./Button-D31kv467.js";import"./small-cross-D6oSifG2.js";import"./ActionButton-Cp3aDaBn.js";import"./Checkbox-Uu7inM8S.js";import"./useValueChanged-DmJ879ms.js";import"./CollapsiblePanel-DfVnlVp0.js";import"./MultiColumnSortDialog-DVSTR6wV.js";import"./MenuTrigger-DSwrR03C.js";import"./CompositeItem-goXUaz1O.js";import"./ToolbarRootContext-BkrLDfAz.js";import"./getDisabledMountTransitionStyles-D7gTNN3D.js";import"./getPseudoElementBounds-C3vtCcOF.js";import"./chevron-down-BW9trwrB.js";import"./index-CpQuftWe.js";import"./error-DutCoEmF.js";import"./BaseCbacBanner-2J4T5KAr.js";import"./makeExternalStore-hGx-yTqS.js";import"./Tooltip-DCQRgWv6.js";import"./PopoverPopup-Cv-T7MGp.js";import"./debounce-byeXsieX.js";import"./useOsdkClient-Db8XiLDB.js";import"./tick-CtNHx9U0.js";import"./DropdownField-CLkxqAQ8.js";import"./isEqual-COZEKq5T.js";import"./withOsdkMetrics-vNphc_NN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
