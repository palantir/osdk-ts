import{j as i}from"./iframe-BdjRDCo-.js";import{O as p}from"./object-table-Dtcz12IT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DKvg3Gmv.js";import"./preload-helper-BsLdtZok.js";import"./Table-Cx3axRXr.js";import"./index-47c2OpeK.js";import"./Dialog-DbIFtalD.js";import"./cross-B5GzLpqa.js";import"./svgIconContainer-CQO2iyCb.js";import"./useBaseUiId-D_XUMLa4.js";import"./InternalBackdrop-Wo6tyC9E.js";import"./composite-CKlKqtP8.js";import"./index-DauSPNF0.js";import"./index-C3FIy_al.js";import"./index-Dt84Iv_5.js";import"./useEventCallback-BMnGO4Fm.js";import"./SkeletonBar-B7Prl9lh.js";import"./LoadingCell-DacR6Cx9.js";import"./ColumnConfigDialog-Bup3DQUt.js";import"./DraggableList-akxDFxxW.js";import"./search-C7zMm79O.js";import"./Input-CxfR2yqt.js";import"./useControlled-B8Jz7rQz.js";import"./Button-BL8FosPK.js";import"./small-cross-Hk9lslT7.js";import"./ActionButton-BOzqWsgN.js";import"./Checkbox-DHdCg2eB.js";import"./useValueChanged-BxuwKHYK.js";import"./CollapsiblePanel-DsNgy45u.js";import"./MultiColumnSortDialog-CRXODrkC.js";import"./MenuTrigger-CegzCc63.js";import"./CompositeItem-C9-QWuFp.js";import"./ToolbarRootContext-B-UKwdIZ.js";import"./getDisabledMountTransitionStyles-DqVTgWbQ.js";import"./getPseudoElementBounds-D7e_8qLy.js";import"./chevron-down-CZ95xNZC.js";import"./index-DczRP-BI.js";import"./error-B9XMEbgf.js";import"./BaseCbacBanner-BVWMsn2z.js";import"./makeExternalStore-BzujWOSe.js";import"./Tooltip-BA98EOIH.js";import"./PopoverPopup-BQ8qOJ-A.js";import"./debounce-CDYkNytK.js";import"./useOsdkClient-G0DtmmXL.js";import"./tick-hmoZ_aS5.js";import"./DropdownField-J2qWCChs.js";import"./isEqual-BCmlNN5k.js";import"./withOsdkMetrics-Cd9aI-bB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
