import{j as i}from"./iframe-C-ZowQax.js";import{O as p}from"./object-table-BoFDvNT8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cp1L7nVu.js";import"./preload-helper-BwoiUuS0.js";import"./Table-pAtwTM9K.js";import"./index-Be4hOd1B.js";import"./Dialog-DtLoQywW.js";import"./cross-Eu5MsQSw.js";import"./svgIconContainer-DOvH0cqq.js";import"./useBaseUiId-z3JC-8KB.js";import"./InternalBackdrop-Bq6YL1k4.js";import"./composite-DecXstOI.js";import"./index-Ds7XpPFE.js";import"./index-CLAxlO_0.js";import"./index-CIH23t0R.js";import"./useEventCallback-rnlsmwi1.js";import"./SkeletonBar-Bzw4W5us.js";import"./LoadingCell-BWWklX_C.js";import"./ColumnConfigDialog-CkG71Sl6.js";import"./DraggableList-DJpjIFcN.js";import"./search-IKabI-9R.js";import"./Input-DBndaIW5.js";import"./useControlled-BMJFbw6E.js";import"./Button-BvplgYnA.js";import"./small-cross-Bk6KAhb2.js";import"./ActionButton-Dgf6XiQc.js";import"./Checkbox-BG2a4QAU.js";import"./useValueChanged-Dwc1SDE4.js";import"./CollapsiblePanel-CgIdvyXZ.js";import"./MultiColumnSortDialog-CQWhwk_m.js";import"./MenuTrigger-pnLY5jLU.js";import"./CompositeItem-Boyopm8a.js";import"./ToolbarRootContext-qpt4Azan.js";import"./getDisabledMountTransitionStyles-DBO-O-Ga.js";import"./getPseudoElementBounds-DmT2yiee.js";import"./chevron-down-BB7K5vpo.js";import"./index-BDVpzpby.js";import"./error-DLiiLlwM.js";import"./BaseCbacBanner-DTZ9UsMw.js";import"./makeExternalStore-D6lqxyG2.js";import"./Tooltip-BWTRoX0F.js";import"./PopoverPopup-CG9CYd0u.js";import"./debounce-BAsjd_Of.js";import"./useOsdkClient-Cm53VtWi.js";import"./tick-JKwuhKLh.js";import"./DropdownField-BFfdkSQG.js";import"./isEqual-Dl3K-ctg.js";import"./withOsdkMetrics-nJkmP2WD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
