import{j as i}from"./iframe-BS0M2hwP.js";import{O as p}from"./object-table-7WjT7lpV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChCt7jD0.js";import"./preload-helper-C0HkGCdU.js";import"./Table-B88OXfMx.js";import"./index-CPPTt-fG.js";import"./Dialog-BP0H6HGJ.js";import"./cross-DzypzeyC.js";import"./svgIconContainer-NUXlWCmy.js";import"./useBaseUiId-77uYocVy.js";import"./InternalBackdrop-hDcB9FVt.js";import"./composite-Dtpk2934.js";import"./index-C8CN-2yF.js";import"./index-CnbN8-s2.js";import"./index-Cd_-CKig.js";import"./useEventCallback-CgXNOiJD.js";import"./SkeletonBar-D1-iix8R.js";import"./LoadingCell-BFik17i5.js";import"./ColumnConfigDialog-CGpO-jVp.js";import"./DraggableList-CKhydpzb.js";import"./search-DzKPAVbq.js";import"./Input-C2-Y_50j.js";import"./useControlled-C2cZAxJ2.js";import"./Button-Ba1VM7tv.js";import"./small-cross-DmunPPRL.js";import"./ActionButton-B-OGv12r.js";import"./Checkbox-KsdEkqmQ.js";import"./useValueChanged-DN5r-FMv.js";import"./CollapsiblePanel-BCL9LE3M.js";import"./MultiColumnSortDialog-BrDCJ6OQ.js";import"./MenuTrigger-TfSdmOH4.js";import"./CompositeItem-BonvX_5i.js";import"./ToolbarRootContext-3PBXuwUh.js";import"./getDisabledMountTransitionStyles-B7XR0ec5.js";import"./getPseudoElementBounds-CEDHgaG-.js";import"./chevron-down-OJJdZYcx.js";import"./index-CEsGU-7z.js";import"./error-B91-GI1R.js";import"./BaseCbacBanner-DXyM0xsn.js";import"./makeExternalStore-BO2WwozP.js";import"./Tooltip-D4cxOObb.js";import"./PopoverPopup-DpckpHOT.js";import"./debounce-DAswCS-u.js";import"./useOsdkClient-BxlQ8pCq.js";import"./tick-B7id9DB4.js";import"./DropdownField-BSb2qsUX.js";import"./isEqual-DhYjGK75.js";import"./withOsdkMetrics-DDHgU96d.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
