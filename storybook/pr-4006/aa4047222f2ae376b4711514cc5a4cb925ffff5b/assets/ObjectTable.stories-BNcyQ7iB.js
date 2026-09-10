import{j as i}from"./iframe-C1TIX5JI.js";import{O as p}from"./object-table-CMU-D2op.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DBfGRp5p.js";import"./preload-helper-BtZpkMB0.js";import"./Table-C-Jt6DU2.js";import"./index-Gx0d5aEB.js";import"./Dialog-C3juZxFB.js";import"./cross-BhNrYvcF.js";import"./svgIconContainer-C8MADQYH.js";import"./useBaseUiId-DePiMeOB.js";import"./InternalBackdrop-3gKyBm5j.js";import"./composite-C4rxhLiP.js";import"./index-DJqIo3bD.js";import"./index-CIcyQnyh.js";import"./index-BzYFvMJd.js";import"./useEventCallback-CQj7Y2wd.js";import"./SkeletonBar-Byy-oVLe.js";import"./LoadingCell-CQuqCKwF.js";import"./ColumnConfigDialog-BPEUu41j.js";import"./DraggableList-CUP3XVuA.js";import"./search-LH-9seDT.js";import"./Input-bIhTrC5p.js";import"./useControlled-C6axbr2z.js";import"./Button-CpS9y80N.js";import"./small-cross-qJkEPBr6.js";import"./ActionButton-BHH4NDLY.js";import"./Checkbox-kmqqo5Xt.js";import"./useValueChanged-Bv8cfv1O.js";import"./CollapsiblePanel-mSd7yFQM.js";import"./MultiColumnSortDialog-C-hlH093.js";import"./MenuTrigger-CwAI2mp-.js";import"./CompositeItem-CBntDvdI.js";import"./ToolbarRootContext-B4mO9KPM.js";import"./getDisabledMountTransitionStyles-DAbJFScG.js";import"./getPseudoElementBounds-DEGLArUE.js";import"./chevron-down-CtHVru-S.js";import"./index-U8HSbgyt.js";import"./error-DkEU1DEd.js";import"./BaseCbacBanner-33-W2eHI.js";import"./makeExternalStore-DRXMdcub.js";import"./Tooltip-Cj81ITcV.js";import"./PopoverPopup-DiuwLzzF.js";import"./debounce-BJNuh3Yk.js";import"./useOsdkClient-D64jRzyq.js";import"./tick-Cf1cYmcP.js";import"./DropdownField-B8kwWA0Z.js";import"./isEqual-tnTJm-mS.js";import"./withOsdkMetrics-BYJpc4fR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
