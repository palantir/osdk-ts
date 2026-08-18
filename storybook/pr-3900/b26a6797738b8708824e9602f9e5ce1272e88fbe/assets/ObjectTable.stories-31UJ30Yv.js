import{j as i}from"./iframe-KOhODaDj.js";import{O as p}from"./object-table-DSWTbMDR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DKMEy9Zj.js";import"./preload-helper-BODknkj-.js";import"./Table-CNDm6mjo.js";import"./index-B0nzDQgS.js";import"./Dialog-ahiGBcOB.js";import"./cross-Dgf421i8.js";import"./svgIconContainer-C65gZPep.js";import"./useBaseUiId-gSHm8V6S.js";import"./InternalBackdrop-DdOq3Puu.js";import"./composite-C_Vf-kWD.js";import"./index-DV1hfBzW.js";import"./index-D9daGdR1.js";import"./index-Cqyyg3ii.js";import"./useEventCallback-d1jn-iXH.js";import"./SkeletonBar-M71vaxj9.js";import"./LoadingCell-Crqd7-Dl.js";import"./ColumnConfigDialog-CdN84COY.js";import"./DraggableList-D--ERkhp.js";import"./search-BaFhwWB9.js";import"./Input-B02ROypI.js";import"./useControlled-DJm187qA.js";import"./Button-DhCL6Aji.js";import"./small-cross-D82pj7CN.js";import"./ActionButton-CxYw6q3v.js";import"./Checkbox-B5WPRVRc.js";import"./useValueChanged-CtNkJgXl.js";import"./CollapsiblePanel-_DkAa5xs.js";import"./MultiColumnSortDialog-CXqEow0k.js";import"./MenuTrigger-DtX4J4qI.js";import"./CompositeItem-KroluAr_.js";import"./ToolbarRootContext-CEqE4F8_.js";import"./getDisabledMountTransitionStyles-CvvFseQ6.js";import"./getPseudoElementBounds-DmQW0k5c.js";import"./chevron-down-CWcC4j17.js";import"./index-Cebj72FH.js";import"./error-BU6upqzF.js";import"./BaseCbacBanner-D-CAdumw.js";import"./makeExternalStore-mEv2XVah.js";import"./Tooltip-DOeCzjZQ.js";import"./PopoverPopup-lOn6mGJy.js";import"./debounce-DUXfBiTb.js";import"./useOsdkClient-j0dX3qXm.js";import"./tick-f2pTlKFj.js";import"./DropdownField-k4eRTytw.js";import"./isEqual-BqKBT1By.js";import"./withOsdkMetrics-D2FX6zR1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
