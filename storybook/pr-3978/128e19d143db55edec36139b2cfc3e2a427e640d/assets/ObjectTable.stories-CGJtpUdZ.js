import{j as i}from"./iframe-Cfa7VV9b.js";import{O as p}from"./object-table-DXBlul32.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4iWsWL2.js";import"./preload-helper-CNnDmdGh.js";import"./Table-BB0k3bQv.js";import"./index-CH9AmopW.js";import"./Dialog-w0Dm1Fh9.js";import"./cross-BEJbLhxw.js";import"./svgIconContainer-DvY8yHqi.js";import"./useBaseUiId-D_k54qol.js";import"./InternalBackdrop-BVCviyNt.js";import"./composite-CrY-lNuw.js";import"./index-Bv1S_5M0.js";import"./index-TmLVBI9S.js";import"./index-67hxxU-T.js";import"./useEventCallback-K8cd2Fnj.js";import"./SkeletonBar-Bs1-yAkF.js";import"./LoadingCell-Qob4Jpx9.js";import"./ColumnConfigDialog-DTiwSQWS.js";import"./DraggableList-BRn8YBjo.js";import"./search-BwdTmPFq.js";import"./Input-DN8AJK08.js";import"./useControlled-CjWedb3G.js";import"./Button-DTyGlfF4.js";import"./small-cross-C3IJlndA.js";import"./ActionButton-CXudEriw.js";import"./Checkbox-B7Va5HB2.js";import"./useValueChanged-B94bKY6Z.js";import"./CollapsiblePanel-DCPma9to.js";import"./MultiColumnSortDialog-D65ehaZ8.js";import"./MenuTrigger-CXYWTRNk.js";import"./CompositeItem-Hyqz3S2c.js";import"./ToolbarRootContext-b1GByVNw.js";import"./getDisabledMountTransitionStyles-D8GdmpOs.js";import"./getPseudoElementBounds-D_Rk3WjB.js";import"./chevron-down-GlFAnb1p.js";import"./index-DIAXbPaT.js";import"./error-DARJoisr.js";import"./BaseCbacBanner-DHgwbqtn.js";import"./makeExternalStore-CgLbI1f8.js";import"./Tooltip-fzl9DYcK.js";import"./PopoverPopup-BPWYYHWp.js";import"./debounce-BhgPK9RJ.js";import"./useOsdkClient-DHcLBuTj.js";import"./tick-C2d5tvIe.js";import"./DropdownField-s65vbGOa.js";import"./isEqual-BjpIMPRN.js";import"./withOsdkMetrics-D6ZfJzuW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
