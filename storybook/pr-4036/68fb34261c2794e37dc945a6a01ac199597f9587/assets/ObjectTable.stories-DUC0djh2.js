import{j as i}from"./iframe-YNEpMth_.js";import{O as p}from"./object-table-Dfh1zhN2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CLCNr5Wb.js";import"./preload-helper-DJ1mpgSP.js";import"./Table-C2w9T7KR.js";import"./index-B2puki5T.js";import"./Dialog-HVq8Ar7Z.js";import"./cross-C6C4JYc8.js";import"./svgIconContainer-BhHr47Fp.js";import"./useBaseUiId-CHPLJ4sE.js";import"./InternalBackdrop-DA38PjxL.js";import"./composite-vOR0gMDm.js";import"./index-rgrCnizS.js";import"./index-CyFPGQhr.js";import"./index-ClAp5_lm.js";import"./useEventCallback-Cm02Rmqs.js";import"./SkeletonBar-DU-mDkYe.js";import"./LoadingCell-BGoFyUfm.js";import"./ColumnConfigDialog-BdSpUGyZ.js";import"./DraggableList-B9fVzBuz.js";import"./search-uuqEPS6n.js";import"./Input-pwxvUMdX.js";import"./useControlled-BW2zwjNJ.js";import"./Button-Cg8b97WO.js";import"./small-cross-DhU5yWFp.js";import"./ActionButton-B303YVFF.js";import"./Checkbox-bKP18AWh.js";import"./useValueChanged-CAGtW709.js";import"./CollapsiblePanel-CX929Hyr.js";import"./MultiColumnSortDialog-CmtAYB3X.js";import"./MenuTrigger-DITetX7l.js";import"./CompositeItem-C4SXKvmu.js";import"./ToolbarRootContext-D9Oiyr8g.js";import"./getDisabledMountTransitionStyles-CqnrcrqL.js";import"./getPseudoElementBounds-CqBdaJPM.js";import"./chevron-down-UgMmigdo.js";import"./index-DuH1OBFw.js";import"./error-VfGLFz6H.js";import"./BaseCbacBanner-DHMXvY-i.js";import"./makeExternalStore-VqCxcddq.js";import"./Tooltip-D3ZEzSU3.js";import"./PopoverPopup-_aMPVtOd.js";import"./debounce-lENr_Rz7.js";import"./useOsdkClient-CddY0wY9.js";import"./tick-CtCofIiZ.js";import"./DropdownField-CxRjqDt2.js";import"./isEqual-DuDCR3RJ.js";import"./withOsdkMetrics-CvLC4P61.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
