import{j as i}from"./iframe-D6GK-HvP.js";import{O as p}from"./object-table-c5-yuc1V.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFWveTT2.js";import"./preload-helper-BFH31g1G.js";import"./Table-KaTG4LsG.js";import"./index-B8Opp0Aq.js";import"./Dialog-BMlaZ5OW.js";import"./cross-Dd2BFVFf.js";import"./svgIconContainer-CSrNgshe.js";import"./useBaseUiId-8c0vpIbF.js";import"./InternalBackdrop-HHAKufKS.js";import"./composite-CrjUHFOu.js";import"./index-P8xupo9q.js";import"./index-BJnCsIvw.js";import"./index-BnURt9pi.js";import"./useEventCallback-SOIvlHLC.js";import"./SkeletonBar-F48-D9OO.js";import"./LoadingCell-CnqEJ9mH.js";import"./ColumnConfigDialog-DC09W4dG.js";import"./DraggableList-pqCMT3mz.js";import"./search-BIJa8P83.js";import"./Input-CEqlI-vi.js";import"./useControlled-DuFMSGQq.js";import"./Button-oq6XXTdR.js";import"./small-cross-poVqs8u3.js";import"./ActionButton-Bub0N-0E.js";import"./Checkbox-CyQO4MFp.js";import"./useValueChanged-re7ueQpT.js";import"./CollapsiblePanel-Cj9OvKAd.js";import"./MultiColumnSortDialog-uinvQw2f.js";import"./MenuTrigger-2Gpj1hX5.js";import"./CompositeItem-XBxLSQGB.js";import"./ToolbarRootContext-DGSqIy6x.js";import"./getDisabledMountTransitionStyles-CPvJg8iL.js";import"./getPseudoElementBounds-DSxspgXt.js";import"./chevron-down-B7x3jao1.js";import"./index-C08EsZev.js";import"./error-CecGBnpf.js";import"./BaseCbacBanner-BVqhNcwk.js";import"./makeExternalStore-DeRAagV9.js";import"./Tooltip-xOoakjaD.js";import"./PopoverPopup-YhXneox5.js";import"./debounce-Cn0q10eM.js";import"./useOsdkClient-B41IHrdM.js";import"./tick-BvUp_jCe.js";import"./DropdownField-BocBrIvP.js";import"./isEqual-BDeh4Ts9.js";import"./withOsdkMetrics-D368-fbW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
