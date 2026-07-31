import{j as i}from"./iframe-CMhwc6yu.js";import{O as p}from"./object-table-Rq5DxrG4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXOduWa1.js";import"./preload-helper-CbbeoF4N.js";import"./Table-DRQCyrCZ.js";import"./index-C2NWml_0.js";import"./Dialog-D-n2VjII.js";import"./cross-CI2EuVLe.js";import"./svgIconContainer-Do_XH38C.js";import"./useBaseUiId-C-AKSjpe.js";import"./InternalBackdrop-YttCJD5R.js";import"./composite-BeSuuE0r.js";import"./index-CLTQ2YZZ.js";import"./index-CYf-jFq0.js";import"./index-CcLC40Dq.js";import"./useEventCallback-Duz16abh.js";import"./SkeletonBar-Bbh35rlF.js";import"./LoadingCell-CFWKBMe3.js";import"./ColumnConfigDialog-CzL28oxe.js";import"./DraggableList-MH7eKqEF.js";import"./search-BYZu81Ts.js";import"./Input-7eUEZAd2.js";import"./useControlled-MLlvuDBf.js";import"./isEqual-xtw4nyWu.js";import"./isObject-nzaBmHWQ.js";import"./Button-CE_QE-eV.js";import"./ActionButton-CPnmehQy.js";import"./Checkbox-8RIdGXXF.js";import"./useValueChanged-cQhh4GcD.js";import"./CollapsiblePanel-EqTeVic5.js";import"./MultiColumnSortDialog-BYxVW7s0.js";import"./MenuTrigger-Bvljeq7z.js";import"./CompositeItem-C5Pf2lIH.js";import"./ToolbarRootContext-otfQj27w.js";import"./getDisabledMountTransitionStyles-pTrQZdF3.js";import"./getPseudoElementBounds-DQ39mZJs.js";import"./chevron-down-B9twCniC.js";import"./index-DCQ6MC0R.js";import"./error-DiGCKWWT.js";import"./BaseCbacBanner-Ci7fn3Ji.js";import"./makeExternalStore-Cd3U3q8T.js";import"./Tooltip-CfcrXACM.js";import"./PopoverPopup-DMZFfjT6.js";import"./toNumber-qPcxCkKr.js";import"./useOsdkClient-BAYVrfgb.js";import"./tick-CTaHT6NZ.js";import"./DropdownField-B2438tnE.js";import"./withOsdkMetrics-C7tthBfr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
